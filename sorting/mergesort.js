"use strict";

function merge(array1, array2) {
    var newArray = [];

    while (array1.length || array2.length) {
        if (array1[0] <= array2[0] || !array2.length) {
            newArray.push(array1.shift());
        } else {
            newArray.push(array2.shift());
        }
    }
    return newArray;
}

function mergeSort(array) {
    var arrayLeft;

    if (array.length < 2) {
        return array;
    } else {
        arrayLeft = array.splice(0, Math.floor(array.length / 2));
        return merge(mergeSort(arrayLeft), mergeSort(array));
    }

}

console.log(mergeSort("MERGESORT".split("")));
console.log(mergeSort([-10, 3.4, 1, 6.5, 12, -3.14]));

