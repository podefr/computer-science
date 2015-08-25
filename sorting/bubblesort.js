"use strict";

module.exports = function bubblesort(array) {

    var nonsorted = true;

    while (nonsorted) {
        nonsorted = sort();
    }

    function sort() {
        var hasSwapped = false;
        array.reduce(function (item, nextItem, nextItemIndex) {
            if (item > nextItem) {
                hasSwapped = true;
                swap(nextItemIndex - 1, nextItemIndex);
            }
            return nextItem;
        });
        return hasSwapped;
    }

    function swap(index1, index2) {
        var temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }

    return array;

};