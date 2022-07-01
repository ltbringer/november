import { makeCollisionGrid } from "./collisions";
import { IS_COLLIDER, MAP_X_OFFSET, MAP_Y_OFFSET, TILES } from "../../constants";
import { Sprite } from "../../sprites";


export class BoxCollider {
    width: number;
    height: number;
    position: coordinates;
    isCollider: boolean;
    static width = 64;
    static height = 64;
    constructor({ position }: position) {
        this.position = position;
        this.width = BoxCollider.width;
        this.height = BoxCollider.height;
        this.isCollider = true;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.strokeStyle = "rgba(100, 0, 0, 0.5)";
        ctx.strokeRect(this.position.x, this.position.y, BoxCollider.width, BoxCollider.height);
        ctx.font = "10px Arial";
        ctx.fillText(`(${this.position.x}, ${this.position.y})`, this.position.x + 10, this.position.y + 20);
        ctx.fillStyle = "black";
        ctx.fillRect(this.position.x, this.position.y, 5, 5);
    }
}

export const getColliders = (): BoxCollider[] => {
    const colliders: BoxCollider[] = [];
    const collisionGrid: number[][] = makeCollisionGrid(TILES.rows);
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

export const checkCollision = (
    player: Sprite,
    collider: BoxCollider,
    { x, y }: coordinates
): boolean => {
    const playerPosition = player.position;
    const colliderPosition = collider.position;

    return ((playerPosition.x + player.width > colliderPosition.x + x) // player is to the right of collider
    && (playerPosition.x < colliderPosition.x + x + collider.width) // player is to the left of collider
    && (playerPosition.y + player.height > colliderPosition.y + y) // player is below collider
    && (playerPosition.y < colliderPosition.y + y + collider.height)) // player is above collider
}
