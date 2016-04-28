"use strict";

function quickSort(array) {
    if (array.length < 2) {
        return array;
    }

    var pivot = array.shift();
    var left = [];
    var right = [];
    var current;

    while (array.length) {
        current = array.shift();
        if (current < pivot) {
            left.push(current);
        } else {
            right.push(current);
        }
    }

    return [].concat(quickSort(left), pivot, quickSort(right));
}

// golfed ES5, 139 bytes
function q(u,i,c,k,s){i=u.length;if(i<2)return u;c=u.shift();k=[];s=[];while(--i)(u[0]<c?k:s).push(u.shift());return[].concat(q(k),c,q(s))}

function quickQuickSort(array) {
    var newArray = [], length;
    while (length = array.length) {
        newArray.push(array.splice(~~(Math.random()*length),1));
    }
    return newArray;
}

// tests
console.log(quickQuickSort("QUICKSORT".split("")));
console.log(quickQuickSort([-10, 3.4, 1, 6.5, 12, -3.14]));
console.log(quickQuickSort([-10, 3.4, 1, 6.5, 0, -3.14]));