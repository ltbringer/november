import { Attack } from "../core";
import { Playable } from "../../sprites";
import { randomInt } from "../../utils/misc";

export class CitricHealing extends Attack {
  constructor() {
    super({
      name: "Citric Healing",
      damage: 2,
      type: "grass",
      range: 1000,
      accuracy: 0.8,
      cooldown: 2,
      description: "",
      effects: [],
    });
  }

  activate(user: Playable, target: Playable): CitricHealing {
    user.hp = Math.min(user.maxHp, user.hp + 10);
    return this;
  }

  render(
    user: Playable,
    target: Playable,
    ctx: CanvasRenderingContext2D
  ): CitricHealing {
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
