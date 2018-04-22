class Stack {
    constructor() {
        this.map = new Map();
    }

    push(value) {
        this.map.set(this.map.size, value);
    }

    pop() {
        if (!this.map.size) {
            return;
        }
        const lastIdx = this.map.size-1;
        const value = this.map.get(lastIdx);
        this.map.delete(lastIdx);
        return value;
    }

    size() {
        return this.map.size;
    }
}

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
        let value;

        while (this.stack1.size() > 1) {
            this.stack2.push(this.stack1.pop());
        }

        value = this.stack1.pop();

        while (this.stack2.size()) {
            this.stack1.push(this.stack2.pop());
        }

        return value;
    }

    size() {
        return this.stack1.size();
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