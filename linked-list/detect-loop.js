class LinkedList {
    add(node) {
        if (!this.head) {
            this.head = node;
        }

        if (this.foot) {
            this.foot.next = node;
        }

        this.foot = node;
    }

    getIterator() {
        return function *generator() {
            let current = this.head;

            while (current.next) {
                let node = current.next;
                current = current.next;
                yield node.value;
            }
        }.bind(this);
    }

    loopDetector() {
        if (!this.head || !this.head.next || !this.head.next.next) {
            return false;
        }

        let slowNode = this.head;
        let fastNode = this.head.next.next;

        while (true) {
            if (slowNode === fastNode) {
                break;
            }

            slowNode = slowNode.next;

            if (fastNode.next && fastNode.next.next) {
                fastNode = fastNode.next.next;
            } else {
                return false;
            }
        }

        console.log('loop detected at ', slowNode.value);

    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const linkedList = new LinkedList();

const map = new Map([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => [value, new Node(value)]));

map.forEach(entry => linkedList.add(entry));

// Adding loop
linkedList.add(map.get(4));

linkedList.loopDetector();

