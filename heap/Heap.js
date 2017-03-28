function Heap(comparator = (a, b) => a > b) {
    let heap = [];

    this.push = function push(value) {
        heap.push(value);

        siftUp(heap.length - 1);
    };

    this.pop = function pop() {
        if (!heap.length) {
            return undefined;
        }

        const root = heap.shift();
        const newRoot = heap.pop();
        heap.unshift(newRoot);

        siftDown();

        return root;
    };

    this.peek = function peek() {
        return heap[0];
    };

    this.replace = function replace(value) {
        heap[0] = value;

        siftDown();
    };

    this.init = function init(resetValues) {
        // using floyds method
        let length = resetValues.length;

        heap.length = 0;

        while (length--) {
            heap.unshift(resetValues[length]);
            siftDown();
        }
    };

    this.size = function () {
        return heap.length;
    };

    this.dump = function dump() {
        return heap.slice(0);
    };

    this.toSortedArray = function toSortedArray() {
        const sortedArray = [];
        let nextValue;

        while (nextValue = this.pop()) {
            sortedArray.push(nextValue);
        }

        return sortedArray
    };

    function siftUp(index) {
        if (!isRoot(index)) {
            const parentIndex = getParentIndex(index);
            if (comparator(heap[index], heap[parentIndex])) {
                swap(parentIndex, index);
                siftUp(parentIndex);
            }
        }
    }

    function siftDown(index = 0) {
        const itemValue = heap[index];
        const leftChildIndex = getLeftChildIndex(index);
        const rightChildIndex = getRightChildIndex(index);

        if (leftChildIndex >= heap.length || rightChildIndex >= heap.length) {
            return;
        }

        const leftChildValue = heap[leftChildIndex];
        const rightChildValue = heap[rightChildIndex];

        if (comparator(leftChildValue, itemValue) && comparator(leftChildValue, rightChildValue)) {
            swap(index, leftChildIndex);
            siftDown(leftChildIndex);
        } else if (comparator(rightChildValue, itemValue) && comparator(rightChildValue, leftChildValue)) {
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

module.exports = {
    Heap: Heap,
    maxHeap: (a, b) => a > b,
    minHeap: (a, b) => a < b
};