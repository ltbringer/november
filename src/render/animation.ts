import { getCtx } from "./canvas";
import { PLAYER_MOVESPEED } from "../constants";
import { getColliders, checkCollision } from "./collider";
import { BoxCollider } from "./collider";
import { State } from "../state";
import { Sprite } from "../sprites";

type MotionControlArgs = { state: State, bg: Sprite, player: Sprite, fg: Sprite, colliders: BoxCollider[],}
type AnimationBuilderArgs = { bg: Sprite, player: Sprite, fg: Sprite, state: State, canvas: HTMLCanvasElement}

const motionControl = ({ state, bg, player, fg, colliders }: MotionControlArgs): void => {
    const { keys } = state;
    let futureKeyState: coordinates = {x: 0, y: 0}
    if (keys.isPressed(keys.up)) {
        futureKeyState.y = PLAYER_MOVESPEED;
    } else if (keys.isPressed(keys.left)) {
        futureKeyState.x = PLAYER_MOVESPEED;
    } else if (keys.isPressed(keys.down)) {
        futureKeyState.y = -PLAYER_MOVESPEED;
    } else if (keys.isPressed(keys.right)) {
        futureKeyState.x = -PLAYER_MOVESPEED;
    }

    const collisions = colliders.some((collider: BoxCollider) => checkCollision(player, collider, futureKeyState));

    const moveMobile = (mobile: BoxCollider | Sprite) => {
        if (keys.isPressed(keys.up) && !collisions) {
            mobile.position.y += PLAYER_MOVESPEED
            player.animate("up");
        } else if (keys.isPressed(keys.left) && !collisions) {
            mobile.position.x += PLAYER_MOVESPEED
            player.animate("left");
        } else if (keys.isPressed(keys.down) && !collisions) {
            mobile.position.y -= PLAYER_MOVESPEED
            player.animate("down");
        } else if (keys.isPressed(keys.right) && !collisions) {
            mobile.position.x -= PLAYER_MOVESPEED
            player.animate("right");
        }
    }

    [...colliders, bg, fg].forEach(moveMobile);
}

export const animationBuilder = ({ bg, player, state, canvas, fg }: AnimationBuilderArgs): () => void => {
    const ctx: CanvasRenderingContext2D = getCtx(canvas);
    const sprites: Sprite[] = [bg, player, fg];
    sprites.forEach(sprite => sprite.loadImage(ctx));
    const colliders = getColliders();

    const animate = (): void => {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        bg.draw(ctx);
        player.draw(ctx);
        fg.draw(ctx);
        window.requestAnimationFrame(animate);
        motionControl({ state, bg, player, fg, colliders });
    }
    return animate;
}
