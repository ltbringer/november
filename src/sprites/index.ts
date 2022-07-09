import { hasKey, randomInt } from '../utils/misc';
import { BAR_HEIGHT, BAR_OFFSET } from '../constants';
import { BoxCollider, checkCollision } from "../render/collider";

export class Sprite {
    position: coordinates;
    zoom?: number;
    image: HTMLImageElement;
    width: number;
    height: number;
    face: number;
    frames?: number;
    currentFrame: number;
    directions: DirectionFaceArgs
    framesPerDirection: number;
    refreshRate: number;

    constructor({
        position,
        image,
        width,
        height,
        directions,
        zoom = 1,
        frames = 1,
    }: SpriteArgs) {
        this.position = position;
        this.zoom = zoom;
        this.image = image;
        this.width = width * this.zoom;
        this.height = height * this.zoom;
        this.face = 0;
        this.currentFrame = 0;
        this.frames = frames;
        this.directions = directions;
        this.refreshRate = 5e-4;
        this.framesPerDirection = this.frames / Object.keys(this.directions).length;
    }

    draw(ctx: CanvasRenderingContext2D): Sprite {
        ctx.drawImage(
            this.image,
            this.currentFrame,
            0,
            this.image.width / this.frames,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames * this.zoom,
            this.image.height * this.zoom);
        return this;
    }

    loadImage(ctx: CanvasRenderingContext2D): Sprite {
        this.image.onload = () => {
            this.draw(ctx);
        }
        return this;
    }
}


export class Playable extends Sprite implements Box {
    position: coordinates;
    zoom?: number;
    image: HTMLImageElement;
    width: number;
    height: number;
    face: number;
    frames?: number;
    currentFrame: number;
    directions: DirectionFaceArgs
    framesPerDirection: number;
    refreshRate: number;
    hp: number;
    armour: number;
    immunity: number;
    muscle: number;
    magik: number;
    mana: number;

    constructor(spriteArgs: SpriteArgs, { hp, mana, muscle, magik, armour, immunity}: PlayableArgs) {
       super(spriteArgs);
       this.hp = hp;
       this.mana = mana;
       this.muscle = muscle;
       this.magik = magik;
       this.armour = armour;
       this.immunity = immunity;
    }

    animate(direction: string): Playable {
        if (hasKey(this.directions, direction)) {
            const firstFrame = this.directions[direction];
            const lastFrame = this.directions[direction] + this.framesPerDirection;
            this.face = (this.face >= firstFrame && this.face < lastFrame)
                ? this.face + this.refreshRate
                : firstFrame;
        }
        this.currentFrame = Math.floor(this.face) * this.frames;
        return this
    }

    follow(position: coordinates, collisions: boolean): Playable {
        const newX = randomInt(-1, 1);
        const newY = randomInt(-1, 1);
        if (!collisions) {
            this.position.x += newX;
            this.position.y += newY;
        }
        return this;
    }

    attack(target: Playable, condition: boolean): Playable {
        if (condition && this.hp > 0) {
            const damage = this.muscle / target.armour;
            target.hp = (target.hp - damage > 0) ? target.hp - damage: 0;
        }
        return this;
    }

    hpBarColor() {
        if (this.hp > 50) {
            return "#65d670";
        } else if (this.hp > 20) {
            return "#ffd700";
        } else {
            return "#ff0000";
        }
    }

    drawMeter(ctx: CanvasRenderingContext2D): Playable {
        const BarMaxWidth = this.width;
        const x = this.position.x - BAR_OFFSET;
        const y = this.position.y - 20;
        ctx.fillStyle = "#fff";
        ctx.fillRect(
            x,
            y,
            BarMaxWidth + BAR_OFFSET * 2,
            BAR_HEIGHT + BAR_OFFSET * 2
        );
        return this;
    }

    drawHP(ctx: CanvasRenderingContext2D): Playable {
        const BarMaxWidth = this.width;
        const hpBar = this.hp / 100 * BarMaxWidth;
        const x = this.position.x;
        const y = this.position.y - 20 + BAR_OFFSET;
        ctx.fillStyle = this.hpBarColor();
        ctx.fillRect(x, y, hpBar, 5);
        return this;
    }

    drawMana(ctx: CanvasRenderingContext2D): Playable {
        const BarMaxWidth = this.width;
        const currentMana = this.mana / 100 * BarMaxWidth;
        const x = this.position.x
        const y = this.position.y - 20 + BAR_OFFSET + 5 + BAR_OFFSET;
        const width = currentMana;
        ctx.fillStyle = "#0077da";
        ctx.fillRect(x, y, width, 3);
        return this;
    }

    draw(ctx: CanvasRenderingContext2D): Playable {
        if (this.hp == 0) {
            return this;
        }
        this.drawMeter(ctx)
            .drawHP(ctx)
            .drawMana(ctx);

        ctx.strokeStyle = "rgba(100, 0, 0, 0.5)";
        ctx.fillStyle = "black";
        ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
        ctx.font = "10px Arial";
        ctx.fillText(`(${this.position.x}, ${this.position.y})`, this.position.x + 10, this.position.y + this.height + 20);
        ctx.fillRect(this.position.x, this.position.y, 5, 5);

        ctx.drawImage(
            this.image,
            this.currentFrame,
            0,
            this.image.width / this.frames,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames * this.zoom,
            this.image.height * this.zoom);
        return this;
    }
}
