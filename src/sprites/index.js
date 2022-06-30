export class Sprite {
    constructor({
        position,
        image,
        width,
        height,
        cropX = 1,
        cropY = 1,
        zoom = 1
    }) {
        this.position = position;
        this.zoom = zoom;
        this.image = image;
        this.width = width * this.zoom;
        this.height = height * this.zoom;
        this.cropX = cropX;
        this.cropY = cropY;
    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            0,
            0,
            this.image.width / this.cropX,
            this.image.height / this.cropY,
            this.position.x,
            this.position.y,
            this.image.width / this.cropX * this.zoom,
            this.image.height / this.cropY * this.zoom);
        return this;
    }

    loadImage(ctx) {
        this.image.onload = () => {
            this.draw(ctx);
        }
        return this;
    }
}
