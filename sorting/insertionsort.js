"use strict";

module.exports = function insertionsort(unsortedArray) {
    // An array with one item is always sorted
    var sortedArray = unsortedArray.splice(0, 1);
    var unsortedItem;

    // Use shift so that if the array is already sorted we do less inner loops.
    while (unsortedItem = unsortedArray.shift()) {

        if (!sortedArray.some(function (sortedItem, index) {
            if (sortedItem >= unsortedItem) {
                sortedArray.splice(index, 0, unsortedItem);
                return true;
            }
        })) {
            sortedArray.push(unsortedItem);
        }
    }

    return sortedArray;
};