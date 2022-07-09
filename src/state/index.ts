import { PLAYER_MOVESPEED } from "../constants";

export class Keys {
    up: string
    down: string
    left: string
    right: string
    pressed: { [key: string]: boolean }
    motion: { [key: string]: [string, number] }
    lastKey: string | null
    keysToDirection: { [key: string]: string }

    constructor({ up, down, left, right }: DirectionKeyArgs) {
        this.up = up
        this.down = down
        this.left = left
        this.right = right
        this.pressed = {
            [this.up]: false,
            [this.down]: false,
            [this.left]: false,
            [this.right]: false
        }
        this.motion = {
            [this.up]: ["y", PLAYER_MOVESPEED],
            [this.down]: ["y", -PLAYER_MOVESPEED],
            [this.left]: ["x", PLAYER_MOVESPEED],
            [this.right]: ["x", -PLAYER_MOVESPEED]
        }
        this.lastKey = null;
        this.keysToDirection = {
            [this.up]: "up",
            [this.down]: "down",
            [this.left]: "left",
            [this.right]: "right",
        }
    }

    idle(): boolean {
        return Object.keys(this.pressed).every(key => !this.pressed[key])
    }

    getLastDirection(): string | null {
        if (this.lastKey) {
            return this.keysToDirection[this.lastKey];
        }
    }

    press(key: string): void {
        this.pressed[key] = true;
        if (key in Object.values(this.keysToDirection)) {
            this.lastKey = key;    
        }
    }

    release(key: string): void {
        this.pressed[key] = false;
    }

    isPressed(direction: string): boolean {
        return this.pressed[direction];
    }
}

export class State {
    keys: Keys
    constructor({ keys }: { keys: DirectionKeyArgs }) {
        this.keys = new Keys(keys)
    }
}
