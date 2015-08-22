/**
 * Merges two sorted arrays and returns a new array in O(n+m)
 * @param {Array} array1
 * @param {Array} array2
 */

function mergeSorted(array1, array2) {
    // Use the longest array for the loop
    var length = array1.length + array2.length;

    for (var i = 0; i < length; i++) {
        if (array1[i] > array2[0] || array1[i] === undefined) {
            array1.splice(i, 0, array2.shift());
            i++;
        }
    }

    return array1;
}




console.log(mergeSorted([0, 1, 3, 5], [2, 4, 6]));
console.log(mergeSorted([-1, 1, 3, 5], [-2, 0, 2, 4, 6]));
console.log(mergeSorted([0, 1, 3, 5], [2, 4, 6, 7, 8]));