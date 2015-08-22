"use strict";

module.exports = function bsearch(array, item, min, max) {

    min = min || 0;
    max = max || array.length;

    var middle = Math.floor((min + max) / 2);

    // Why don't we directly test the boundaries as well as the middle, that would save some iterations right?
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
    } else if (array[middle] > item) {
        return bsearch(array, item, min, middle);
    }
    // This block implies array[middle] <= item!
    else {
        return bsearch(array, item, middle, max);
    }
};