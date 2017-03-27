// quick implementation of a MaxHeap
// will improve this to:
// - support min heap
// - use clever algorithm to create a heap from an array

function Heap() {
    const heap = [];

    this.push = function push(value) {
        heap.push(value);

        siftUp(heap.length -1);
    };

    this.pop = function pop() {
        if (!heap.length) {
            return undefined;
        }

        const root = heap.shift();
        const newRoot = heap.pop();
        heap.unshift(newRoot);

        siftDown(0);

        return root;
    };

    this.peek = function peek() {
        return heap[0];
    };

    this.replace = function replace(value) {
        heap[0] = value;

        siftDown(0);
    };

    this.reset = function reset() {

    };

    this.dump = function dump() {
        return heap.slice(0);
    };

    function siftUp(index) {
        if (!isRoot(index)) {
            const parentIndex = getParentIndex(index);
            if (heap[index] > heap[parentIndex]) {
                swap(parentIndex, index);
                siftUp(parentIndex);
            }
        }
    }

    function siftDown(index) {
        const itemValue = heap[index];
        const leftChildIndex = getLeftChildIndex(index);
        const rightChildIndex = getRightChildIndex(index);
        const leftChildValue = heap[leftChildIndex];
        const rightChildValue = heap[rightChildIndex];

        if (leftChildValue > itemValue && leftChildValue > rightChildValue) {
            swap(index, leftChildIndex);
            siftDown(leftChildIndex);
        }

        if (rightChildValue > itemValue && rightChildValue > leftChildValue) {
            swap(index, rightChildIndex);
            siftDown(rightChildIndex);
        }
    }

    function swap(indexA, indexB) {
        const temp = heap[indexA];
        heap[indexA] = heap[indexB];
        heap[indexB] = temp;
    }

    function getParentIndex(index) {
        return Math.floor(index / 2);
    }

    function getLeftChildIndex(index) {
        return index * 2;
    }

    function getRightChildIndex(index) {
        return index * 2 + 1;
    }

    function isRoot(index) {
        return index === 0;
    }
}

module.exports = Heap;