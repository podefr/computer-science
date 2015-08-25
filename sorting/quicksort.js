"use strict";

// QUICKSORT copied from http://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/
// as a learning exercise.

function swap(items, left, right) {
    var temp = items[left];
    items[left] = items[right];
    items[right] = temp;
}

function partition(items, left, right) {
    var pivot = items[Math.floor((left + right) / 2)];
    var l = left;
    var r = right;

    while (l <= r) {
        while (items[l] < pivot) {
            l++;
        }

        while(items[r] > pivot) {
            r--;
        }

        if (l <= r) {
            swap(items, l, r);
            l++;
            r--;
        }
    }

    return l;
}

module.exports = function quicksort(items, left, right) {

    if (items.length <= 1) {
        return;
    }

    left = left || 0;
    right = right || items.length - 1;

    var index = partition(items, left, right);

    if (left < index - 1) {
        quicksort(items, left, index - 1);
    }

    if (right > index) {
        quicksort(items, index, right);
    }

    return items;
};