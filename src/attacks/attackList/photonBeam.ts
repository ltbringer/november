import { Attack } from "../core";
import { Playable } from "../../sprites";
import { randomInt } from "../../utils/misc";

export class PhotonBeam extends Attack {
  constructor() {
    super({
      name: "Photon Beam",
      damage: 50,
      heal: 0,
      type: "grass",
      range: 50,
      cost: 50,
      accuracy: 0.8,
      cooldown: 2,
      description: "",
      effects: [],
    });
  }

  activate(user: Playable, target: Playable): PhotonBeam {
    const damage = (user.magik / target.immunity) * this.damage;
    target.takeDamage(damage);
    user.reduceMana(this.cost);
    return this;
  }

  render(
    user: Playable,
    target: Playable,
    ctx: CanvasRenderingContext2D
  ): PhotonBeam {
    const r = randomInt(user.width / 16, user.width);
    ctx.fillStyle = "rgba(158, 25, 8, 0.8)";
    for (let i = 0; i < 100; i++) {
      const x = randomInt(user.position.x - 50, user.position.x - 500);
      const y = randomInt(user.position.y, user.position.y + user.height);
      const w = randomInt(20, 100);
      const h = 5;
      const r = randomInt(240, 255);
      const g = randomInt(240, 255);
      const b = randomInt(240, 255);
      const a = Math.random();
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
      ctx.fillRect(x, y, w, h);
    }
    return this;
  }
}
