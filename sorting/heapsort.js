const { Heap, maxHeap, minHeap } = require('../heap/Heap');

function maxHeapSort(array) {
    const heap = new Heap(maxHeap);
    heap.init(array);
    return heap.toSortedArray();
}

function minHeapSort(array) {
    const heap = new Heap(minHeap);
    heap.init(array);
    return heap.toSortedArray();
}

function funkyHeapSort(array) {
    const heap = new Heap((a, b) => a.age > b.age);
    heap.init(array);
    return heap.toSortedArray();
}

console.log(maxHeapSort([10, 3, 4, 8, 2, 9, 7, 1, 6, 5]));
console.log(minHeapSort([10, 3, 4, 8, 2, 9, 7, 1, 6, 5]));

console.log(funkyHeapSort([
    {age: 10, name: 10},
    {age: 3, name: 3},
    {age: 4, name: 4},
    {age: 8, name: 8},
    {age: 2, name: 2},
    {age: 9, name: 9},
    {age: 7, name: 7},
    {age: 1, name: 1},
    {age: 6, name: 6},
    {age: 5, name: 5},
]).map(x => x.name));