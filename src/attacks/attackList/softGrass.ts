import { Attack } from "../core";
import { Playable } from "../../sprites";
import { randomInt } from "../../utils/misc";

export class SoftGrass extends Attack {
  constructor() {
    super({
      name: "Soft Grass",
      damage: 10,
      type: "grass",
      range: 1,
      accuracy: 0.8,
      cooldown: 2,
      description: "",
      effects: [],
    });
  }

  activate(user: Playable, target: Playable): SoftGrass {
    if (target.hp === 0) {
      return this;
    }
    const damage = user.magik / target.immunity;
    target.hp = Math.max(0, target.hp - damage);
    return this;
  }

  render(
    user: Playable,
    target: Playable,
    ctx: CanvasRenderingContext2D
  ): SoftGrass {
    const r = randomInt(user.width / 16, user.width);
    ctx.fillStyle = "rgba(8, 168, 86, 0.5)";
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
