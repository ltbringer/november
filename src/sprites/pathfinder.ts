import { TILES, DIRECTIONS } from '../constants';
import { BoxCollider, coordsAbsPosition } from '../render/collider';
import { makeGrid } from '../render/collider/collisions';
import { manhattanDistance } from '../utils/misc';
import { PriorityQueue } from '../utils/priorityQueue';


const encodeCoords = (coordinates: coordinates) => `${coordinates.x}-${coordinates.y}`;


export class PathFinder {
    visited: Set<string>;
    surroundings: PriorityQueue<AStarRecord>;
    paths: TileMap;

    constructor () {
        this.paths = {};
        this.visited = new Set();
        this.surroundings = new PriorityQueue();
        this.reset();
    }

    reset() {
        this.visited = new Set();
        this.surroundings = new PriorityQueue();
    }
    
    isSameCoords(c1: coordinates, c2: coordinates): boolean {
        return c1.x === c2.x && c1.y === c2.y;
    }

    buildPath(key: string): coordinates[] {
        if (!this.paths.hasOwnProperty(key)) {
            return [];
        }
        const path: coordinates[] = [];
        let current = this.paths[key];
        while (current.parent) {
            path.push(current.position);
            current = this.paths[encodeCoords(current.parent)];
        }
        return path.reverse();
    }

    find(source: coordinates, destination: coordinates, colliders: BoxCollider[]): coordinates[] {
        const srcKey = encodeCoords(source);
        let path: coordinates[] = [];
        const aStarRecord: AStarRecord = {
            fScore: 0,
            gScore: 0,
            hScore: 0,
            parent: null,
            position: source,
            key: srcKey
        };
        this.visited.add(srcKey);
        this.paths[srcKey] = aStarRecord;
        this.surroundings.nq(0, aStarRecord);

        while (!this.surroundings.empty()) {
            const current: AStarRecord = this.surroundings.dq();
            this.paths[current.key] = current;

            if (this.isSameCoords(current.position, destination)) {
                path = this.buildPath(current.key);
                this.reset();
                return path;
            }

            for (let direction of DIRECTIONS) {
                const [horizontal, vertical] = direction;
                const newCoordinates = { x: current.position.x + horizontal, y: current.position.y + vertical };
                const newKey = encodeCoords(newCoordinates);
                const isBoundary = colliders.some(
                    (collider: BoxCollider) => this.isSameCoords(newCoordinates, coordsAbsPosition(collider.position))
                );

                if (isBoundary || this.visited.has(newKey)) {
                    continue;
                }

                
                const gScore = current.gScore + 1;
                const hScore = manhattanDistance(newCoordinates, destination);
                const fScore = gScore + hScore;

                this.visited.add(newKey);
                this.surroundings.nq(fScore, {
                    fScore,
                    gScore,
                    hScore,
                    parent: current.position,
                    position: newCoordinates,
                    key: newKey
                })
            }
        }
        this.reset();
        return path;
    }

}
