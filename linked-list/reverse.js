
class LinkedList {
    constructor(array) {
        this.head = new Node(array.shift());

        array.reduce((previous, next) => {
            const nextNode = new Node(next);

            previous.next = nextNode;

            return nextNode;
        }, this.head);
    }

    getHead() {
        return this.header;
    }

    reverseCopy() {
        const reversedArray = [];

        this.traverse(node => reversedArray.unshift(node.value));

        return new LinkedList(reversedArray);
    }

    reverseMutate() {
        let previous = this.head;
        let current = previous.next;
        previous.next = null;
        let save;

        while (current) {
            save = current.next;
            current.next = previous;
            previous = current;
            current = save;
        }

        this.head = previous;
    }

    traverse(callback) {
        let node = this.head;

        while (node) {
            callback(node);
            node = node.next;
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const linkedList = new LinkedList(['a', 'b', 'c', 'd', 'e', 'f']);

linkedList.traverse(node => console.log(node.value));

console.log('--------------');


const reversedLinkedList = linkedList.reverseCopy();

reversedLinkedList.traverse(node => console.log(node.value));


linkedList.reverseMutate();

console.log('--------------');

linkedList.traverse(node => console.log(node.value));
