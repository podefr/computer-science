const LinkedList = require('./LinkedList');

class Stack {
    constructor() {
        this.linkedList = new LinkedList();
    }

    push(value) {
        this.linkedList.addHead(value);
    }

    pop() {
        if (this.linkedList.size) {
            return this.linkedList.removeHead();
        }
    }

    size() {
        return this.linkedList.size;
    }
}

const stack = new Stack();

stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);

while (stack.size()) {
    console.log(stack.pop());
}