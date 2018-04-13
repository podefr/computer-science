// just a quick snippet for fun to validate an initialization approach using reduce

class LinkedList {
    constructor(stack) {
        this.head = new Node(stack.shift());

        stack.reduce((previous, current) => {
            const currentNode = new Node(current);
            previous.next = currentNode;

            return currentNode;
        }, this.head);
    }

    traverse(callback) {
        let currentNode = this.head;

        while (true) {
            callback(currentNode.value);
            currentNode = currentNode.next;

            if (!currentNode) {
                break;
            }
        }
    }
}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

const linkedList = new LinkedList(['a', 'b', 'c', 'd', 'e', 'f']);

linkedList.traverse((value) => console.log(value));
