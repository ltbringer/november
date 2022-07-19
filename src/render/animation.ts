import { getCtx } from "./canvas";
import { ENEMY_CHASE_DISTANCE, PLAYER_MOVESPEED } from "../constants";
import { getColliders, checkCollision } from "./collider";
import { BoxCollider } from "./collider";
import { State } from "../state";
import { Sprite, Playable } from "../sprites";
import { hasKey, manhattanDistance } from "../utils/misc";

type MotionControlArgs = {
  ctx: CanvasRenderingContext2D;
  state: State;
  bg: Sprite;
  player: Playable;
  enemy: Playable;
  fg: Sprite;
  colliders: BoxCollider[];
};
type AnimationBuilderArgs = {
  bg: Sprite;
  player: Playable;
  enemy: Playable;
  fg: Sprite;
  state: State;
  canvas: HTMLCanvasElement;
};

const motionControl = ({
  ctx,
  state,
  bg,
  player,
  enemy,
  fg,
  colliders,
}: MotionControlArgs): void => {
  const { keys } = state;
  let futureKeyState: coordinates = { x: 0, y: 0 };
  let follow = false;
  if (keys.isPressed(keys.up)) {
    futureKeyState.y = PLAYER_MOVESPEED;
  } else if (keys.isPressed(keys.left)) {
    futureKeyState.x = PLAYER_MOVESPEED;
  } else if (keys.isPressed(keys.down)) {
    futureKeyState.y = -PLAYER_MOVESPEED;
  } else if (keys.isPressed(keys.right)) {
    futureKeyState.x = -PLAYER_MOVESPEED;
  }

  const playerCollisions = colliders.some((collider: BoxCollider) =>
    checkCollision(player, collider, futureKeyState)
  );
  const enemyCollisions = colliders.some((collider: BoxCollider) =>
    checkCollision(enemy, collider, futureKeyState)
  );
  const enemyDistance = manhattanDistance(player.position, enemy.position);

  const moveMobile = (mobile: BoxCollider | Sprite) => {
    for (const key of Object.keys(keys.pressed)) {
      if (!keys.keysToDirectionMap.hasOwnProperty(key)) {
        break;
      }
      if (keys.isPressed(key)) {
        player.animate(keys.keysToDirectionMap[key]);

        if (!playerCollisions) {
          const [axis, velocity] = keys.motion[key];
          if (hasKey(mobile.position, axis)) {
            mobile.position[axis] += velocity;
            break;
          }
        }
      }
    }
  };

  moveMobile(player);
  if (enemyDistance <= ENEMY_CHASE_DISTANCE || follow) {
    enemy.follow(player, colliders);
    follow = true;
  }

  if (checkCollision(enemy, player, { x: 0, y: 0 }, -16)) {
    enemy.attack(player, "y", ctx);
    player.attack(enemy, "y", ctx);
  }
};

export const animationBuilder = ({
  bg,
  player,
  state,
  canvas,
  fg,
  enemy,
}: AnimationBuilderArgs): (() => void) => {
  const ctx: CanvasRenderingContext2D = getCtx(canvas);
  const sprites: Sprite[] = [bg, player, fg, enemy];
  sprites.forEach((sprite) => sprite.loadImage(ctx));
  const colliders = getColliders();

  const animate = (): void => {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    bg.draw(ctx);
    player.draw(ctx);
    enemy.draw(ctx);
    fg.draw(ctx);
    window.requestAnimationFrame(animate);
    motionControl({ ctx, state, bg, player, enemy, fg, colliders });
  };
  return animate;
};
