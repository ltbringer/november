import "./css/style.css";
import { Sprite } from "./sprites";
import { mapSetup } from "./render/canvas";
import { configureKeyPress } from "./events/keys";
import { animationBuilder } from "./render/animation";
import { MAP_WIDTH, MAP_HEIGHT, MAP_X_OFFSET, MAP_Y_OFFSET } from "./constants";
import { state } from "./state";


const main = () => {
    const playerImg = new Image();
    const bgImg = new Image();
    const bg = new Sprite({
        position: {
            x: MAP_X_OFFSET,
            y: MAP_Y_OFFSET
        },
        velocity: {
            x: 0,
            y: 0
        },
        image: bgImg,
        width: MAP_WIDTH,
        height: MAP_HEIGHT,
        scale: {
            x: 2,
            y: 2
        }
    });

    configureKeyPress(state.keys);
    mapSetup(MAP_WIDTH, MAP_HEIGHT);
    animationBuilder({ bg, bgImg, playerImg, state })();
}


main();