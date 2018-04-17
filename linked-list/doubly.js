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

linkedList.traverse((value) => console.log(value));
linkedList.traverseReverse((value) => console.log(value));
