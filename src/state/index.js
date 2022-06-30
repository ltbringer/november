export class Keys {
    constructor({ up, down, left, right }) {
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
        this.reverse = {
            [this.up]: this.down,
            [this.down]: this.up,
            [this.left]: this.right,
            [this.right]: this.left
        }
        this.lastKey = null;
    }

    press(key) {
        this.pressed[key] = true;
        this.lastKey = key;
    }

    release(key) {
        this.pressed[key] = false;
    }

    isPressed(direction) {
        return this.pressed[direction];
    }
}

export class State {
    constructor({ keys }) {
        this.keys = new Keys(keys)
    }
}
