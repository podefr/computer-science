const LinkedList = require('./LinkedList');

class Queue {
    constructor() {
        this.linkedList = new LinkedList();
    }

    enqueue(value) {
        this.linkedList.addFoot(value);
    }

    dequeue() {
        if (this.linkedList.size) {
            return this.linkedList.removeHead();
        }
    }

    size() {
        return this.linkedList.size;
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