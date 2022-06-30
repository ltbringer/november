import { getCtx } from "./canvas";
import BgImage from "../img/november.png";
import PlayerSprite from "../img/main_char_sprite.png";
import { CHAR_WIDTH, CHAR_HEIGHT, CHAR_X_OFFSET, CHAR_Y_OFFSET } from "../constants";


export const animationBuilder = ({ bg, bgImg, playerImg, state }) => {
    bgImg.src = BgImage;
    playerImg.src = PlayerSprite;
    const ctx = getCtx();
    bgImg.onload = () => {
        bg.draw(ctx);
        playerImg.onload = () => {
            ctx.drawImage(playerImg, 0, 0, CHAR_WIDTH, CHAR_HEIGHT, CHAR_X_OFFSET, CHAR_Y_OFFSET, CHAR_WIDTH * 4, CHAR_HEIGHT * 4);
        }
    }

    const animate = () => {
        bg.draw(ctx);
        ctx.drawImage(playerImg, 0, 0, CHAR_WIDTH, CHAR_HEIGHT, CHAR_X_OFFSET, CHAR_Y_OFFSET, CHAR_WIDTH * 4, CHAR_HEIGHT * 4);
        window.requestAnimationFrame(animate);
        bg.update(state.keys)
    }
    return animate;
}