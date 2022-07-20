export class Effect implements IEffect {
    name: string;
    duration: number;
    startValue: number;
    endValue: number;
    inc: number;
    chance: number;

    constructor({
        name,
        duration,
        startValue,
        endValue,
        inc,
        chance
    }: IEffect) {
        this.name = name;
        this.duration = duration;
        this.startValue = startValue;
        this.endValue = endValue;
        this.inc = inc;
        this.chance = chance;
    }
}

export class Attack implements IAttack {
  name: string;
  damage: number;
  type: string;
  range: number;
  heal: number;
  accuracy: number;
  cooldown: number;
  description: string;
  cost: number;
  effects: Effect[];

  constructor({
    name,
    damage,
    type,
    range,
    accuracy,
    cooldown,
    cost,
    heal,
    effects,
    description
  }: IAttack) {
    this.name = name;
    this.damage = damage;
    this.type = type;
    this.cost = cost;
    this.heal = heal;
    this.effects = effects;
    this.range = range;
    this.accuracy = accuracy;
    this.cooldown = cooldown;
    this.description = description;
  }

  activate(user: IPlayable, target: IPlayable): IAttack {
    return this;
  }
}
