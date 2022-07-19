declare module "*.png";

type DirectionKeyArgs = {
  up: string;
  down: string;
  left: string;
  right: string;
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
  mana: number;
  muscle: number;
  magik: number;
  armour: number;
  immunity: number;
  attacks?: { [key: string]: IAttack };
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
  hp: number;
  armour: number;
  immunity: number;
  muscle: number;
  magik: number;
  mana: number;
  path: coordinates[];
  attacks: { [key: string]: IAttack };
}

interface IAttack {
  name: string;
  damage: number;
  type: string;
  range: number;
  accuracy: number;
  cooldown: number;
  description: string;
  effects: IEffect[];

  activate?(user: IPlayable, target: IPlayable): IAttack;
  render?(user: IPlayable, target: IPlayable, ctx: CanvasRenderingContext2D): IAttack
}

type coordinates = { x: number; y: number };
type BoxPosition = { position: coordinates };
