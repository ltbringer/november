import { hasKey } from '../utils/misc';

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

    animate(direction: string): Sprite {
        if (hasKey(this.directions, direction)) {
            const firstFrame= this.directions[direction];
            const lastFrame = this.directions[direction] + this.framesPerDirection;
            if (this.face >= firstFrame && this.face < lastFrame) {
                this.face += this.refreshRate;
            } else {
                this.face = firstFrame;
            }
        }
        this.currentFrame = Math.floor(this.face) * this.frames;
        return this
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
        console.log("loading images");
        this.image.onload = () => {
            this.draw(ctx);
        }
        return this;
    }
}
