export class Sprite {
    position: { x: number, y: number };
    zoom: number;
    image: HTMLImageElement;
    width: number;
    height: number;
    cropX: number;
    cropY: number;

    constructor({
        position,
        image,
        width,
        height,
        cropX = 1,
        cropY = 1,
        zoom = 1
    }: {
        position: { x: number, y: number },
        image: HTMLImageElement,
        width: number,
        height: number,
        cropX?: number,
        cropY?: number,
        zoom?: number
    }) {
        this.position = position;
        this.zoom = zoom;
        this.image = image;
        this.width = width * this.zoom;
        this.height = height * this.zoom;
        this.cropX = cropX;
        this.cropY = cropY;
    }

    draw(ctx: CanvasRenderingContext2D): Sprite {
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

    loadImage(ctx: CanvasRenderingContext2D): Sprite {
        console.log("loading images");
        this.image.onload = () => {
            this.draw(ctx);
        }
        return this;
    }
}
