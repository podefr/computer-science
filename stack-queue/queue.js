class Queue {
    constructor() {
        this.map = new Map();
        this.min = 0;
    }

    enqueue(value) {
        this.map.set(this.map.size, value);
    }

    dequeue() {
        if (!this.map.size) {
            return;
        }
        const value = this.map.get(this.min);
        this.map.delete(this.min);
        this.min++;
        return value;
    }

    size() {
        return this.map.size;
    }

}

const queue = new Queue();

queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(9);

while (queue.size()) {
    console.log(queue.dequeue());
}