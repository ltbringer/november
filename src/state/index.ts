import { MOVESPEED } from "../constants";
import { hasKey } from "../utils/misc";

export class Controller {
    motion: { [key: string]: { key: string, axis: string, velocity: number, pressed: boolean } }
    attack: { [key: string]: string }
    directionBindings: { [key: string]: string }
    attackBindings: { [key: string]: number }
    activeAttacks: boolean[];

    constructor({ up, down, left, right, attacks }: DirectionKeyArgs) {
        this.motion = {
            up: {
                key: up,
                axis: "y",
                velocity: -MOVESPEED,
                pressed: false,
            },
            down: {
                key: down,
                axis: "y",
                velocity: MOVESPEED,
                pressed: false,
            },
            left: {
                key: left,
                axis: "x",
                velocity: -MOVESPEED,
                pressed: false
            },
            right: {
                key: right,
                axis: "x",
                velocity: MOVESPEED,
                pressed: false
            },
        }
        this.directionBindings = {
            [up]: "up",
            [down]: "down",
            [left]: "left",
            [right]: "right"
        };

        this.attackBindings = {};
        this.activeAttacks = attacks.map(_ => false);

        for (let i = 0; i < attacks.length; i++) {
            this.attackBindings[attacks[i]] = i;
        }
    }

    idle(): boolean {
        return Object.keys(this.motion).every(direction => !this.motion[direction].pressed)
    }

    getMovement(): string | null {
        const directions = Object.keys(this.motion).filter(direction => this.motion[direction].pressed);
        if (directions.length === 1) {
            return directions[0];
        }
        return null;
    }

    getAttack(): number | null {
        const attackIndices = this.activeAttacks.map((attackActive, i) => attackActive ? i : -1).filter(attackIdx => attackIdx !== -1);
        if (attackIndices.length === 1) {
            return attackIndices[0];
        }
        return null;
    }

    press(key: string): void {
        if (hasKey(this.directionBindings, key)) {
            const direction = this.directionBindings[key];
            this.motion[direction].pressed = true;
        } else if (hasKey(this.attackBindings, key)) {
            const attack = this.attackBindings[key];
            this.activeAttacks[attack] = true;
        }
    }

    release(key: string): void {
        if (hasKey(this.directionBindings, key)) {
            const direction = this.directionBindings[key];
            this.motion[direction].pressed = false;
        } else if (hasKey(this.attackBindings, key)) {
            const attack = this.attackBindings[key];
            this.activeAttacks[attack] = false;
        }
    }

    isPressed(key: string | number): boolean {
        if (hasKey(this.motion, key)) {
            return this.motion[key].pressed;
        } else if (hasKey(this.activeAttacks, key)) {
            return this.activeAttacks[key];
        }
        return false;
    }
}

export class State {
    controller: Controller
    constructor({ controller }: { controller: DirectionKeyArgs }) {
        this.controller = new Controller(controller)
    }
}
