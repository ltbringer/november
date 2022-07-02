import { Sprite } from "./sprites";
import { mapSetup } from "./render/canvas";
import { configureKeyPress } from "./events/keys";
import { animationBuilder } from "./render/animation";
import { MAP_WIDTH, MAP_HEIGHT, MAP_X_OFFSET, MAP_Y_OFFSET, CHAR_X_OFFSET, CHAR_Y_OFFSET } from "./constants";
import { State } from "./state";

import "./css/style.css";
import BackgroundSprite from "./img/november.png";
import ForegroundSprite from "./img/november_foreground.png";
import PlayerSprite from "./img/main_char_sprite.png";


const main = () => {
    const playerImg = new Image();
    const bgImg = new Image();
    const fgImg = new Image();
    bgImg.src = BackgroundSprite;
    playerImg.src = PlayerSprite;
    fgImg.src = ForegroundSprite;
    const playerFrames = 16;

    const bg = new Sprite({
        position: {
            x: MAP_X_OFFSET,
            y: MAP_Y_OFFSET
        },
        image: bgImg,
        width: MAP_WIDTH,
        height: MAP_HEIGHT,
        directions: {
            down: 0,
            up: 0,
            left: 0,
            right: 0
        }
    });
    const fg = new Sprite({
        position: {
            x: MAP_X_OFFSET,
            y: MAP_Y_OFFSET
        },
        image: fgImg,
        width: MAP_WIDTH,
        height: MAP_HEIGHT,
        directions: {
            down: 0,
            up: 0,
            left: 0,
            right: 0
        }
    })
    const player = new Sprite({
        position: {
            x: CHAR_X_OFFSET,
            y: CHAR_Y_OFFSET
        },
        image: playerImg,
        width: playerImg.width / playerFrames,
        height: playerImg.height,
        zoom: 4,
        frames: playerFrames,
        directions: {
            down: 0,
            up: 4,
            left: 8,
            right: 12
        }
    })
    const state = new State({ keys: { up: "w", down: "s", left: "a", right: "d" }});
    const canvas = mapSetup(MAP_WIDTH, MAP_HEIGHT);
    configureKeyPress(state.keys);
    animationBuilder({ bg, player, state, canvas, fg })();
}


main();