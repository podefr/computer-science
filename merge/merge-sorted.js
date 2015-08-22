/**
 * Merges array2 into array1 in O(n+m)
 * @param {Array} array1
 * @param {Array} array2
 * @returns {Array} array1 + array2
 */

function mergeSortedInPlace(array1, array2) {
    var length = array1.length + array2.length;

    for (var i = 0; i < length; i++) {
        while (array1[i] > array2[0]) {
            array1.splice(i, 0, array2.shift());
            i++;
        }

        if (array1[i] === undefined) {
            array1.splice(i, 0, array2.shift());
        }
    }

    return array1;
}

function mergeSorted(array1, array2) {
    var length = array1.length + array2.length;
    var newArray = [];

    for (var i = 0; i < length; i++) {
        if (array1[0] < array2[0]) {
            newArray.push(array1.shift());
        } else if (array2[0] < array1[0]) {
            newArray.push(array2.shift());
        } else if (!array1.length) {
            newArray.push(array2.shift());
        } else if (!array2.length) {
            newArray.push(array1.shift());
        }
    }

    return newArray;
}


console.log("in place");

console.log(mergeSortedInPlace([0, 1, 3, 5], [2, 4, 6]));
console.log(mergeSortedInPlace([-1, 1, 3, 5], [-2, 0, 2, 4, 6]));
console.log(mergeSortedInPlace([0, 1, 3, 5, 8], [2, 4, 6, 7]));
console.log(mergeSortedInPlace([0, 1], [2, 3, 4, 5, 6, 7]));

console.log("new array");

console.log(mergeSorted([0, 1, 3, 5], [2, 4, 6]));
console.log(mergeSorted([-1, 1, 3, 5], [-2, 0, 2, 4, 6]));
console.log(mergeSorted([0, 1, 3, 5, 8], [2, 4, 6, 7]));