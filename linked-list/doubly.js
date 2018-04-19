class DoublyLinkedList {
    constructor(stack = []) {
        this.head = new Node(stack.shift());
        let currentNode;

        stack.reduce((previous, current) => {
            currentNode = new Node(current);

            previous.next = currentNode;
            currentNode.previous = previous;

            return currentNode;
        }, this.head);

        this.foot = currentNode;
    }

    traverse(callback) {
        let current = this.head;

        while (current) {
            callback(current.value);
            current = current.next;
        }
    }

    traverseReverse(callback) {
        let current = this.foot;

        while (current) {
            callback(current.value);
            current = current.previous;
        }
    }

    getTraverser() {
        return function* () {
            let current = this.head;

            while (current) {
                let currentValue = current.value;
                current = current.next;
                yield currentValue;
            }
        }.bind(this)
    }
}

class Node {
    constructor(value, next, previous) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}

const array = [0, 1, 2, 3, 4, 5, 6, 7];
const linkedList = new DoublyLinkedList(array);

console.log('forward');


linkedList.traverse((value) => console.log(value));

console.log('backwards');


linkedList.traverseReverse((value) => console.log(value));

console.log('forward with generator function');

const iterator = linkedList.getTraverser();

for (let value of iterator()) {
    console.log(value);
}
