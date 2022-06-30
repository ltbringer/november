import "./css/style.css";
import { Sprite } from "./sprites";
import { mapSetup } from "./render/canvas";
import { configureKeyPress } from "./events/keys";
import { animationBuilder } from "./render/animation";
import { MAP_WIDTH, MAP_HEIGHT, MAP_X_OFFSET, MAP_Y_OFFSET, CHAR_X_OFFSET, CHAR_Y_OFFSET } from "./constants";
import { State } from "./state";
import BgImage from "./img/november.png";
import PlayerSprite from "./img/main_char_sprite.png";


const main = () => {
    const playerImg = new Image();
    const bgImg = new Image();
    bgImg.src = BgImage;
    playerImg.src = PlayerSprite;

    const bg = new Sprite({
        position: {
            x: MAP_X_OFFSET,
            y: MAP_Y_OFFSET
        },
        image: bgImg,
        width: MAP_WIDTH,
        height: MAP_HEIGHT,
    });
    const player = new Sprite({
        position: {
            x: CHAR_X_OFFSET,
            y: CHAR_Y_OFFSET
        },
        image: playerImg,
        width: playerImg.width / 16,
        height: playerImg.height,
        cropX: 16,
        zoom: 4
    })
    console.log(player);
    const state = new State({ keys: { up: "w", down: "s", left: "a", right: "d" }});
    configureKeyPress(state.keys);
    mapSetup(MAP_WIDTH, MAP_HEIGHT);
    animationBuilder({ bg, player, state })();
}


main();