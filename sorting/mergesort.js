"use strict";

function merge(array1, array2) {

    var newLength = array1.length + array2.length;
    var newArray = [];

    while (newLength--) {
        if (array1[0] <= array2[0]) {
            newArray.push(array1.shift());
        } else {
            if (array2.length) {
                newArray.push(array2.shift());
            }

            if (!array2.length && array1.length) {
                newArray.push(array1.shift());
            }
        }
    }
    return newArray;
}

function mergeSort(array) {
    var array1;

    if (array.length <= 1) {
        return array;
    } else {
        array1 = array.splice(0, Math.floor(array.length / 2));
        return merge(mergeSort(array1), mergeSort(array));
    }

}

console.log(mergeSort("MERGESORT".split("")));
console.log(mergeSort([-10, 3.4, 1, 6.5, 12, -3.14]));

