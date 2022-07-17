import { makeCollisionGrid } from "./collisions";
import { IS_COLLIDER, MAP_X_OFFSET, MAP_Y_OFFSET, TILES } from "../../constants";


export class BoxCollider implements Box {
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

export const coordsAbsPosition = (coords: coordinates): coordinates => ({
    x: Math.floor((coords.x - MAP_X_OFFSET) / TILE_WIDTH),
    y: Math.floor((coords.y - MAP_Y_OFFSET) / TILE_HEIGHT),
})

export const coordsMapPosition = (coords: coordinates): coordinates => ({
    x: (coords.x * TILE_WIDTH) + MAP_X_OFFSET,
    y: (coords.y * TILE_HEIGHT) + MAP_Y_OFFSET,
})

export const getColliders = (): BoxCollider[] => {
    const colliders: BoxCollider[] = [];
    const grid: number[][] = makeGrid(TILES.rows);
    grid.forEach((row, i) => {
        row.forEach((col, j) => {
            if (col === IS_COLLIDER) {
                colliders.push(new BoxCollider({
                    position: coordsMapPosition({ x: j, y: i }),
                }));
            }
        });
    })
    return colliders;
}

/**
 *          _____ _____
 *          | P | | C |
 *          ‾‾‾‾‾ ‾‾‾‾‾
 *         
 * @param shape1 
 * @param shape2 
 * @param param2 
 * @param tolerance 
 * @returns 
 */
export const checkCollision = (
    shape1: Box,
    shape2: Box,
    { x, y }: coordinates,
    tolerance: number = 16
): boolean => {
    const shape1Position = shape1.position;
    const shape2Position = shape2.position;

    return ((shape1Position.x + shape1.width > shape2Position.x + x + tolerance) // player is to the right of collider
    && (shape1Position.x < shape2Position.x + x + shape2.width - tolerance) // player is to the left of collider
    && (shape1Position.y + shape1.height > shape2Position.y + y + tolerance) // player is below collider
    && (shape1Position.y < shape2Position.y + y + shape2.height - tolerance)) // player is above collider
}
