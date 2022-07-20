import { Attack } from "../core";
import { Playable } from "../../sprites";
import { randomInt } from "../../utils/misc";

export class ShadowStep extends Attack {
  constructor() {
    super({
      name: "Shadow Step",
      damage: 0,
      heal: 0,
      type: "shadow",
      range: 1000,
      cost: 10,
      accuracy: 0.8,
      cooldown: 2,
      description: "",
      effects: [],
    });
  }

  activate(user: Playable, target: Playable): ShadowStep {
    user
      .reduceMana(this.cost);
    const step = 100;
    user.position = {
      x: user.position.x + randomInt(-step, step),
      y: user.position.y + randomInt(-step, step)
    };
    return this;
  }

  render(
    user: Playable,
    target: Playable,
    ctx: CanvasRenderingContext2D
  ): ShadowStep {
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    for (let i = 0; i < 100; i++) {
      const x = randomInt(user.position.x, user.position.x + user.width);
      const y = randomInt(user.position.y, user.position.y + user.height);
      const w = 1;
      const h = 20;
      ctx.fillRect(x, y, w, h);
    }
    return this;
  }
}
