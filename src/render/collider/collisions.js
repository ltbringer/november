import { chunk } from "lodash";
import collisions from "../../data/collision.json";

export const makeCollisionGrid = () => {
    return chunk(collisions, 40)
}
