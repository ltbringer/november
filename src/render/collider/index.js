import { makeCollisionGrid } from "./collisions";
import { IS_COLLIDER, MAP_X_OFFSET, MAP_Y_OFFSET } from "../../constants";


class BoxCollider {
    static width = 64;
    static height = 64;
    constructor({ position }) {
        this.position = position;
        this.width = BoxCollider.width;
        this.height = BoxCollider.height;
        this.isCollider = true;
    }

    draw(ctx) {
        ctx.strokeStyle = "rgba(100, 0, 0, 0.5)";
        ctx.strokeRect(this.position.x, this.position.y, BoxCollider.width, BoxCollider.height);
        ctx.font = "10px Arial";
        ctx.fillText(`(${this.position.x}, ${this.position.y})`, this.position.x + 10, this.position.y + 20);
        ctx.fillStyle = "black";
        ctx.fillRect(this.position.x, this.position.y, 5, 5);
    }
}

export const getColliders = () => {
    const colliders = [];
    const collisionGrid = makeCollisionGrid();
    collisionGrid.forEach((row, i) => {
        row.forEach((col, j) => {
            if (col === IS_COLLIDER) {
                colliders.push(new BoxCollider({
                    position: {
                        x: j * BoxCollider.width + MAP_X_OFFSET,
                        y: i * BoxCollider.height + MAP_Y_OFFSET
                    }
                }));
            }
        });
    })
    return colliders;
}
