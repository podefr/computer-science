class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    add(value) {
        if (value > this.value) {
            if (this.right) {
                this.right.add(value);
            } else {
                this.right = new BinarySearchTree(value);
            }
        } else {
            if (this.left) {
                this.left.add(value);
            } else {
                this.left = new BinarySearchTree(value);
            }
        }
    }

    *traverse() {
        if (this.left) {
            yield *this.left.traverse();
        }
        yield this.value;
        if (this.right) {
            yield *this.right.traverse();
        }
    }
}

const bst = new BinarySearchTree(6);

bst.add(5);
bst.add(1);
bst.add(8);
bst.add(3);
bst.add(7);
bst.add(2);
bst.add(9);
bst.add(0);
bst.add(4);

let value;
for (value of bst.traverse()) {
    console.log(value);
}