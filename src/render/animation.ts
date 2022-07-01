import { getCtx } from "./canvas";
import { PLAYER_MOVESPEED } from "../constants";
import { getColliders, checkCollision } from "./collider";
import { BoxCollider } from "./collider";
import { State } from "../state";
import { Sprite } from "../sprites";


const motionControl = ({ state, bg, colliders, player }: { state: State, bg: Sprite, colliders: BoxCollider[], player: Sprite}): void => {
    const { keys } = state;
    let futureKeyState = {x: 0, y: 0}
    if (keys.isPressed(keys.up)) {
        futureKeyState.y = PLAYER_MOVESPEED;
    } else if (keys.isPressed(keys.left)) {
        futureKeyState.x = PLAYER_MOVESPEED;
    } else if (keys.isPressed(keys.down)) {
        futureKeyState.y = -PLAYER_MOVESPEED;
    } else if (keys.isPressed(keys.right)) {
        futureKeyState.x = -PLAYER_MOVESPEED;
    }

    const collisions = colliders.some(collider => checkCollision(player, collider, futureKeyState));

    const moveMobile = (mobile: BoxCollider | Sprite) => {
        if (keys.isPressed(keys.up) && !collisions) {
            mobile.position.y += PLAYER_MOVESPEED
        } else if (keys.isPressed(keys.left) && !collisions) {
            mobile.position.x += PLAYER_MOVESPEED
        } else if (keys.isPressed(keys.down) && !collisions) {
            mobile.position.y -= PLAYER_MOVESPEED
        } else if (keys.isPressed(keys.right) && !collisions) {
            mobile.position.x -= PLAYER_MOVESPEED
        }
    }

    [...colliders, bg].forEach(moveMobile);
}

export const animationBuilder = ({ bg, player, state, canvas }: { bg: Sprite, player: Sprite, state: State, canvas: HTMLCanvasElement}): () => void => {
    const ctx: CanvasRenderingContext2D = getCtx(canvas);
    const sprites: Sprite[] = [bg, player];
    sprites.forEach(sprite => sprite.loadImage(ctx));
    const colliders = getColliders();

    const animate = (): void => {
        bg.draw(ctx);
        colliders.forEach(collider => collider.draw(ctx));
        player.draw(ctx);
        window.requestAnimationFrame(animate);
        motionControl({ state, bg, colliders, player });
    }
    return animate;
}
