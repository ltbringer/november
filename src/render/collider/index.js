export class BoxCollider {
    constructor({ position }) {
        this.position = position;
        this.width = 48;
        this.height = 48;
    }

    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}
