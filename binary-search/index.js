"use strict";

module.exports = function bsearch(array, item, min, max) {

    min = min || 0;
    max = max || array.length;

    var middle = Math.floor((min + max) / 2);

    if (min === (max - 1)) {
        if (array[min] === item) {
            return min;
        } else {
            return item + " not found";
        }
    }

    if (array[middle] === item) {
        return middle;
    } else if (typeof array[middle] != typeof item) {
        return item + " invalid type";
    } else if (item > array[middle]) {
        return bsearch(array, item, middle, max);
    } else if (item < array[middle]) {
        return bsearch(array, item, min, middle);
    }
};