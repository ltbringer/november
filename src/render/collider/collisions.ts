import { collisions } from "../../data/collision";

export const makeGrid = (chunkSize: number): number[][] => {
    const collisionGrid: number[][] = [];
    for (let i = 0; i < collisions.length; i += chunkSize) {
        collisionGrid.push(collisions.slice(i, i + chunkSize));
    }
    return collisionGrid
}
