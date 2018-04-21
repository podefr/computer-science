module.exports = class LinkedList {
    constructor() {
        this.size = 0;
    }

    addFoot(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node
        }

        if (this.foot) {
            this.foot.next = node;
        }

        this.foot = node;
        this.size++;
    }

    addHead(value) {
        const node = new Node(value);

        if (this.head) {
            node.next = this.head;
        }

        this.head = node;
        this.size++;
    }

    removeHead() {
        if (!this.head) {
            return false;
        }

        const head = this.head;

        this.head = this.head.next;

        this.size--;
        return head.value;
    }

    peekHead() {
        return this.head.value;
    }

    peekFoot() {
        return this.head.foot;
    }
};

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}