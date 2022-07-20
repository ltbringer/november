import { Attack } from "../core";
import { Playable } from "../../sprites";
import { randomInt } from "../../utils/misc";

export class CitricHealing extends Attack {
  constructor() {
    super({
      name: "Citric Healing",
      damage: 0,
      heal: 10,
      type: "grass",
      range: 1000,
      cost: 50,
      accuracy: 0.8,
      cooldown: 2,
      description: "",
      effects: [],
    });
  }

  activate(user: Playable, target: Playable): CitricHealing {
    user
      .heal(this.heal)
      .reduceMana(this.cost);
    return this;
  }

  render(
    user: Playable,
    target: Playable,
    ctx: CanvasRenderingContext2D
  ): CitricHealing {
    const r = randomInt(user.width - 20, user.width);
    ctx.strokeStyle = "rgba(250, 251, 240, 0.8)";
    ctx.lineWidth =  5;
    ctx.beginPath();
    ctx.arc(
      user.position.x + user.width / 2,
      user.position.y + user.height / 2,
      r,
      0,
      2 * Math.PI
    );
    ctx.closePath();
    ctx.stroke();
    return this;
  }
}
