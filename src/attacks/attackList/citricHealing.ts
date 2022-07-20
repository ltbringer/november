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
    const r = randomInt(user.width / 16, user.width);
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    for (let i = 0; i < 10; i++) {
      const x = randomInt(user.position.x, user.position.x + user.width);
      const y = randomInt(user.position.y, user.position.y - 50);
      const w = 5;
      const h = randomInt(20, 100);
      ctx.fillRect(x, y, w, h);
    }
    return this;
  }
}
