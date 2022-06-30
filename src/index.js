import "./css/style.css";
import BgImage from "./img/november.png";
import PlayerSprite from "./img/main_char_sprite.png";

const MAP_WIDTH = 1280;
const MAP_HEIGHT = 800;
const CHAR_WIDTH = 16;
const CHAR_HEIGHT = 16;
const MAP_X_OFFSET = -600;
const MAP_Y_OFFSET = -900;
const CHAR_X_OFFSET = 180;
const CHAR_Y_OFFSET = 160;

const keys = {
    w: false,
    a: false,
    s: false,
    d: false,
}

class Sprite {
    constructor({ position, velocity, image, width, height, scale }) {
        this.position = position;
        this.velocity = velocity;
        this.image = image;
        this.width = width;
        this.height = height;
        this.scale = scale;
    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y
        );
        return this;
    }

    loadImage(ctx) {
        this.image.onload = () => {
            this.draw(ctx);
        }
        return this;
    }
}


const mapSetup = () => {
    const canvas = document.getElementById("canvas");
    canvas.width = MAP_WIDTH;
    canvas.height = MAP_HEIGHT;
}

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

const animate = () => {
    window.requestAnimationFrame(animate);
    const ctx = getCtx();
    const playerImg = new Image();

    bgImg.src = BgImage;
    playerImg.src = PlayerSprite;

    bgImg.onload = () => {
        bg.draw(ctx);
        playerImg.onload = () => {
            ctx.drawImage(playerImg, 0, 0, 16, 16, 600, 600, 64, 64);
        }
    }

    if (keys.w) {
        bg.position.y += 2
    } else if (keys.a) {
        bg.position.x += 2
    } else if (keys.s) {
        bg.position.y -= 2
    } else if (keys.d) {
        bg.position.x -= 2
    }
}

window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
})

window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
})

const getCtx = () => {
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    return ctx;
}

const main = () => {
    mapSetup();
    animate();
}


main();