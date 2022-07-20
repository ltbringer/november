declare module "*.png";

type DirectionKeyArgs = {
  up: string;
  down: string;
  left: string;
  right: string;
  attacks: string[];
};
type DirectionFaceArgs = {
  up: number;
  down: number;
  left: number;
  right: number;
};

interface Box {
  position: coordinates;
  width: number;
  height: number;
}

type AStarRecord = {
  fScore: number;
  gScore: number;
  hScore: number;
  parent: coordinates | null;
  position: coordinates;
  key: string;
};

type TileMap = {
  [key: string]: AStarRecord;
};

type SpriteArgs = {
  position: coordinates;
  image: HTMLImageElement;
  width: number;
  height: number;
  zoom?: number;
  frames?: number;
  directions: DirectionFaceArgs;
};

type PlayableArgs = {
  hp: number;
  hpRegen: number;
  mana: number;
  manaRegen: number;
  muscle: number;
  magik: number;
  armour: number;
  immunity: number;
  attacks: IAttack[];
};

interface IEffect {
  name: string;
  duration: number;
  startValue: number;
  endValue: number;
  inc: number;
  chance: number;
}

interface IPlayable extends Box {
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
  armour: number;
  immunity: number;
  muscle: number;
  magik: number;
  mana: number;
  maxMana: number;
  manaRegen: number;
  path: coordinates[];
  attacks: IAttack[];

  takeDamage(damage: number): IPlayable;
  heal(heal: number): IPlayable;
  reduceMana?(cost: number): IPlayable;
}

interface IAttack {
  name: string;
  damage: number;
  heal?: number;
  type: string;
  range: number;
  cost: number;
  accuracy: number;
  cooldown: number;
  description: string;
  effects: IEffect[];

  activate?(user: IPlayable, target: IPlayable): IAttack;
  render?(user: IPlayable, target: IPlayable, ctx: CanvasRenderingContext2D): IAttack
}

type coordinates = { x: number; y: number };
type BoxPosition = { position: coordinates };
