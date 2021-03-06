import { getCtx } from "./canvas";
import { MOVESPEED } from "../constants";
import { getColliders, checkCollision } from "./collider";
import { BoxCollider } from "./collider";
import { State } from "../state";
import { Sprite, Playable } from "../sprites";
import { hasKey, randomInt } from "../utils/misc";

type MotionControlArgs = {
  ctx: CanvasRenderingContext2D;
  state: State;
  bg: Sprite;
  player: Playable;
  enemies: Playable[];
  fg: Sprite;
  colliders: BoxCollider[];
};

type AnimationBuilderArgs = {
  bg: Sprite;
  player: Playable;
  enemies: Playable[];
  fg: Sprite;
  state: State;
  canvas: HTMLCanvasElement;
};

const motionControl = ({
  ctx,
  state,
  player,
  enemies,
  colliders,
}: MotionControlArgs): void => {
  const { controller } = state;
  let futureKeyState: coordinates = { x: 0, y: 0 };

  if (controller.isPressed("up")) {
    futureKeyState.y = MOVESPEED;
  } else if (controller.isPressed("left")) {
    futureKeyState.x = MOVESPEED;
  } else if (controller.isPressed("down")) {
    futureKeyState.y = -MOVESPEED;
  } else if (controller.isPressed("right")) {
    futureKeyState.x = -MOVESPEED;
  }

  const playerCollisions = colliders.some((collider: BoxCollider) =>
    checkCollision(player, collider, futureKeyState)
  );

  const moveMobile = (mobile: BoxCollider | Sprite) => {
    const movementDirection = controller.getMovement();
    if (!movementDirection) {
      player.animate("idle");
      return;
    }
    const { axis, velocity } = controller.motion[movementDirection];
    player.animate(movementDirection);
    enemies.forEach(enemy => enemy.follow(player, colliders))

    if (!playerCollisions && hasKey(mobile.position, axis)) {
      mobile.position[axis] += velocity;
    }
  };

  moveMobile(player);

  enemies.forEach((enemy: Playable) => {
    enemy.regen().attack(player, randomInt(0, enemy.attacks.length - 1), ctx);
    player.regen().attack(enemy, controller.getAttack(), ctx);
  })
};

export const animationBuilder = ({
  bg,
  player,
  state,
  canvas,
  fg,
  enemies,
}: AnimationBuilderArgs): void => {
  const ctx: CanvasRenderingContext2D = getCtx(canvas);
  const colliders = getColliders();
  const animate = (): void => {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    bg.draw(ctx);
    player.draw(ctx);
    enemies.forEach(enemy => enemy.draw(ctx));
    fg.draw(ctx);
    window.requestAnimationFrame(animate);
    motionControl({ ctx, state, bg, player, enemies, fg, colliders });
  };
  animate();
};
