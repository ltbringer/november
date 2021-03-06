import { Attack } from "../core";
import { Playable } from "../../sprites";
import { randomInt } from "../../utils/misc";

export class ToxicDrain extends Attack {
  constructor() {
    super({
      name: "Toxic Drain",
      damage: 20,
      type: "poison",
      range: 16,
      accuracy: 0.8,
      cost: 20,
      cooldown: 2,
      description:
        "The user drains the target's HP and releases toxic fumes. Has 15% chance of poisoning the target.",
      effects: [
        {
          name: "poison",
          duration: 2,
          startValue: 0,
          endValue: 10,
          inc: 1,
          chance: 0.15,
        },
      ],
    });
  }

  activate(user: IPlayable, target: IPlayable): ToxicDrain {
    const damage = (user.magik / target.immunity) * this.damage;
    target.takeDamage(damage);
    user.reduceMana(this.cost);
    return this;
  }

  render(
    user: Playable,
    target: Playable,
    ctx: CanvasRenderingContext2D
  ): ToxicDrain {
    const r = randomInt(user.width / 16, user.width);
    ctx.fillStyle = "rgba(180, 112, 224, 0.5)";
    ctx.beginPath();
    ctx.arc(
      user.position.x + user.width / 2,
      user.position.y + user.height / 2,
      r,
      0,
      2 * Math.PI
    );
    ctx.closePath();
    ctx.fill();
    return this;
  }
}
