const PLAYER_MOVESPEED = 2;

export class Sprite {
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

    update(keyState) {
        if (keyState.w) {
            this.position.y += PLAYER_MOVESPEED
        } else if (keyState.a) {
            this.position.x += PLAYER_MOVESPEED
        } else if (keyState.s) {
            this.position.y -= PLAYER_MOVESPEED
        } else if (keyState.d) {
            this.position.x -= PLAYER_MOVESPEED
        }
    }
}
