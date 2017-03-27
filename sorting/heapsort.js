const Heap = require('../heap/Heap');

function heapSort(array) {
    const heap = new Heap();

    array.forEach(x => heap.push(x));

    return array.map(() => heap.pop());
}

console.log(heapSort([10, 3, 4, 8, 2, 9, 7, 1, 6, 5]));