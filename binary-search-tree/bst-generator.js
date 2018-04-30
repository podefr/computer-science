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

    *traverseInOrder() {
        if (this.left) {
            yield *this.left.traverseInOrder();
        }

        yield this.value;

        if (this.right) {
            yield *this.right.traverseInOrder();
        }
    }

    dfs(callback, depth = 0) {
        if (this.left) {
            this.dfs.call(this.left, callback, depth + 1);
        }

        callback(this.value, depth);

        if (this.right) {
            this.dfs.call(this.right, callback, depth + 1);
        }
    }

    bfs(callback, depth = 0, queue = [this]) {
        let node, children = [];

        while (node = queue.shift()) {
            callback(node.value, depth);

            if (node.left) {
                children.push(node.left);
            }

            if (node.right) {
                children.push(node.right);
            }
        }

        if (children.length) {
            this.bfs(callback, depth + 1, children);
        }
    }

    *traverseBreadthFirst(depth = 0, queue = [this]) {
        let node, children = [];

        while (node = queue.shift()) {
            yield { value: node.value, depth };

            if (node.left) {
                children.push(node.left);
            }

            if (node.right) {
                children.push(node.right);
            }
        }

        if (children.length) {
            yield *this.traverseBreadthFirst(depth + 1, children);
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

console.log('---- DFS generator --');

let value;
for (value of bst.traverseInOrder()) {
    console.log(value);
}

console.log('--- DFS callback ----');

bst.dfs((value, depth) => console.log(value, depth));

console.log('--- BFS callback ----');

bst.bfs((value, depth) => console.log(value, depth));

console.log('---- BFS generator ----');


for (value of bst.traverseBreadthFirst()) {
    console.log(value.value, value.depth);
}