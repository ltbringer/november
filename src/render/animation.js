import { getCtx } from "./canvas";
import { PLAYER_MOVESPEED } from "../constants";
import { getColliders } from "./collider";


const checkCollision = (player, collider, { x, y }) => {
    const playerPosition = player.position;
    const colliderPosition = collider.position;

    return ((playerPosition.x + player.width > colliderPosition.x + x) // player is to the right of collider
    && (playerPosition.x < colliderPosition.x + x + collider.width) // player is to the left of collider
    && (playerPosition.y + player.height > colliderPosition.y + y) // player is below collider
    && (playerPosition.y < colliderPosition.y + y + collider.height)) // player is above collider
}

const motionControl = ({ state, bg, colliders, player }) => {
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

    const moveMobile = (mobile) => {
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

export const animationBuilder = ({ bg, player, state }) => {
    const ctx = getCtx();
    const sprites = [bg, player];
    sprites.forEach(sprite => sprite.loadImage(ctx));
    const colliders = getColliders();
    console.log(player.position.x, player.position.x + player.width);

    const animate = () => {
        bg.draw(ctx);
        colliders.forEach(collider => collider.draw(ctx));
        player.draw(ctx);
        window.requestAnimationFrame(animate);
        motionControl({ state, bg, colliders, player });
    }
    return animate;
}
