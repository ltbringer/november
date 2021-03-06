import { hasKey } from "../utils/misc";
import { BAR_HEIGHT, BAR_OFFSET } from "../constants";
import {
  BoxCollider,
  coordsAbsPosition,
  coordsMapPosition,
} from "../render/collider";
import { PathFinder } from "./pathfinder";
import { checkCollision } from "../render/collider";

export class Sprite {
  position: coordinates;
  zoom?: number;
  image: HTMLImageElement;
  width: number;
  height: number;
  face: number;
  frames?: number;
  currentFrame: number;
  directions: DirectionFaceArgs;
  framesPerDirection: number;

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
      (this.image.width / this.frames) * this.zoom,
      this.image.height * this.zoom
    );
    return this;
  }
}

export class Playable extends Sprite implements IPlayable {
  position: coordinates;
  zoom?: number;
  image: HTMLImageElement;
  width: number;
  height: number;
  face: number;
  frames?: number;
  currentFrame: number;
  directions: DirectionFaceArgs;
  framesPerDirection: number;
  refreshRate: number;
  maxHp: number;
  hp: number;
  hpRegen: number;
  armour: number;
  immunity: number;
  muscle: number;
  magik: number;
  maxMana: number;
  mana: number;
  manaRegen: number;
  path: coordinates[];
  attacks: IAttack[];

  constructor(
    spriteArgs: SpriteArgs,
    {
      hp,
      hpRegen,
      mana,
      manaRegen,
      muscle,
      magik,
      armour,
      immunity,
      attacks,
    }: PlayableArgs
  ) {
    super(spriteArgs);
    this.maxHp = hp;
    this.hp = hp;
    this.hpRegen = hpRegen;
    this.maxMana = mana;
    this.mana = mana;
    this.manaRegen = manaRegen;
    this.muscle = muscle;
    this.magik = magik;
    this.refreshRate = this.framesPerDirection / (this.frames * 2);
    this.armour = armour;
    this.immunity = immunity;
    this.path = [];
    this.attacks = attacks;
  }

  idleAnimation(): Playable {
    for (let frameIdx of Object.values(this.directions)) {
      const face = this.currentFrame / this.frames;
      if (face < frameIdx) {
        break;
      }
      this.face = frameIdx;
    }
    this.currentFrame = Math.floor(this.face) * this.frames;
    return this;
  }

  walkAnimation(direction: string): Playable {
    if (!hasKey(this.directions, direction)) {
      return this;
    }

    const firstFrame = this.directions[direction];
    const lastFrame = this.directions[direction] + this.framesPerDirection;
    this.face =
      this.face >= firstFrame && this.face < lastFrame
        ? this.face + this.refreshRate
        : firstFrame;
    this.currentFrame = Math.floor(this.face) * this.frames;
    return this;
  }

  animate(direction: string): Playable {
    if (direction === "idle") {
      this.idleAnimation();
    } else {
      this.walkAnimation(direction);
    }
    return this;
  }

  alive(): boolean {
    return this.hp > 0;
  }

  regen(): Playable {
    if (!this.alive()) {
      return this;
    }
    this.hp = Math.min(this.maxHp, this.hp + this.maxHp * this.hpRegen);
    this.mana = Math.min(this.maxMana, this.mana + this.maxMana * this.manaRegen);
    return this;
  }

  follow(target: Playable, colliders: BoxCollider[]): Playable {
    if (!target.alive()) {
      return this;
    }
    const currentPosition = coordsAbsPosition(this.position);
    const targetPosition = coordsAbsPosition(target.position);
    if (this.path.length === 0) {
      this.path = new PathFinder()
        .find(currentPosition, targetPosition, colliders)
        .map(coordsMapPosition);
    }

    if (this.path.length) {
      this.crawl(this.path.shift());
    }
    return this;
  }

  crawl(coords: coordinates): Playable {
    const x = coords.x - this.position.x;
    const y = coords.y - this.position.y;
    this.position.x += x;
    this.position.y += y;
    return this;
  }

  attack(
    target: Playable,
    choice: number | null,
    ctx: CanvasRenderingContext2D
  ): Playable {
    if (this.hp === 0 || choice === null) {
      return this;
    }
    const attack: IAttack = this.attacks[choice];
    const inRange = checkCollision(target, this, { x: 0, y: 0 }, -attack.range);

    if (
      !inRange ||
      (attack.damage > 0 && target.hp === 0) ||
      attack.cost > this.mana
    ) {
      return this;
    }

    const user = this;
    attack.activate(user, target).render(user, target, ctx);
    return this;
  }

  takeDamage(damage: number): Playable {
    this.hp = Math.max(0, this.hp - damage);
    return this;
  }

  heal(bonusHp: number): Playable {
    this.hp = Math.min(this.maxHp, this.hp + bonusHp);
    return this;
  }

  reduceMana(manaCost: number): Playable {
    this.mana = Math.max(0, this.mana - manaCost);
    return this;
  }

  hpBarColor() {
    if (this.hp / this.maxHp > 0.5) {
      return "#65d670";
    } else if (this.hp / this.maxHp > 0.2) {
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
    const hpBar = (this.hp / this.maxHp) * BarMaxWidth;
    const x = this.position.x;
    const y = this.position.y - 20 + BAR_OFFSET;
    ctx.fillStyle = this.hpBarColor();
    ctx.fillRect(x, y, hpBar, 5);
    return this;
  }

  drawMana(ctx: CanvasRenderingContext2D): Playable {
    const BarMaxWidth = this.width;
    const currentMana = (this.mana / this.maxMana) * BarMaxWidth;
    const x = this.position.x;
    const y = this.position.y - 20 + BAR_OFFSET + 5 + BAR_OFFSET;
    const width = currentMana;
    ctx.fillStyle = "#0077da";
    ctx.fillRect(x, y, width, 3);
    return this;
  }

  drawDebug(ctx: CanvasRenderingContext2D): Playable {
    ctx.strokeStyle = "rgba(100, 0, 0, 0.5)";
    ctx.fillStyle = "black";
    ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
    ctx.font = "10px Arial";
    ctx.fillText(
      `(${this.position.x}, ${this.position.y})`,
      this.position.x + 10,
      this.position.y + this.height + 20
    );
    ctx.fillRect(this.position.x, this.position.y, 5, 5);
    return this;
  }

  draw(ctx: CanvasRenderingContext2D): Playable {
    if (this.hp == 0) {
      return this;
    }
    this.drawMeter(ctx).drawHP(ctx).drawMana(ctx);

    ctx.drawImage(
      this.image,
      this.currentFrame,
      0,
      this.image.width / this.frames,
      this.image.height,
      this.position.x,
      this.position.y,
      (this.image.width / this.frames) * this.zoom,
      this.image.height * this.zoom
    );
    return this;
  }
}
