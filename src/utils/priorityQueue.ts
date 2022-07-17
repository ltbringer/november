export class PriorityQueue<T> {
    items: {priority: number, element: T}[]
    constructor () {
        this.items = [];
    }

    nq(priority: number, element: T): PriorityQueue<T> {
        let left = 0;
        let right = this.items.length - 1;
        let mid = 0;
        let pos = -1;

        if (this.items.length === 0) {
            this.items.push({priority, element});
            return this;
        }

        while (left <= right) {
            mid = Math.floor((left + right) / 2);
            if (this.items[mid].priority > priority) {
                right = mid - 1;
                pos = mid;
            } else {
                left = mid + 1;
            }
        }

        this.items.splice(pos, 0, {priority, element})
        return this;
    }

    dq(): T {
        if (this.items.length) {
            return this.items.shift().element;
        }
        return null
    }

    empty(): boolean {
        return this.items.length === 0;
    }
}
