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