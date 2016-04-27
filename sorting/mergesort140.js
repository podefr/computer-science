// e: the original array to sort
// r: will be used to store half of the original array
// g: will store the length of the original array
// s: will store the new sorted array that's returned
function annotatedM(e,r,g,s) {
    g = e.length

    // If the length is one or less, the array is sorted, we can return it
    if (g<2) return e

    // Otherwise, split the array in halves by:
    // splice(~~g/2) effectively does splice(Math.floor(lengthOriginalArray / 2))
    // and returns half of the array that we then recursively merge sort by calling the merge function on
    // and we reuse the variable of the original array (e) to call the merge sort function on the rest of the array, the other half.
    // then we loop for as many items as they were to in the original array, to merge the two resulting, sorted arrays into the new array
    for (r=m(e.splice(~~g/2)), e=m(e), s=[]; g--;)
        // here we merge two sorted arrays
        // by taking the smallest value at position 0 of each array.
        // Example: merging [0,1,3] and [2,4], we first take 0, push it onto the new array, and remove it from the original one:
        // s === [0], e === [1,3], r=== [2,4]
        // then s === [0,1], e === [3], r === [2,4]
        // then s === [0,1,2], e === [3], r === [2,4]
        // then s === [0,1,2,3], e ===[], r===[4]
        // and s === [0,1,2,3,4], e===[], r===[]
        // based on how we split, we  may have more items in the left array or the right array,
        // so the condition !r.length ensures that if one array is empty (r), we automatically pick from the other one. (e)
        s.push((e[0] < r[0] | !r.length ? e : r).shift())

    // Finally, we return the merged arrays
    return s
}

function m(e,r,g,s){g=e.length;if(g<2)return e;for(r=m(e.splice(~~g/2)),e=m(e),s=[];g--;)s.push((e[0]<r[0]|!r.length?e:r).shift());return s}

console.log(m("MERGESORT".split("")));
console.log(m([-10, 3.4, 1, 6.5, 12, -3.14]));
console.log(m([-10, 3.4, 1, 6.5, 0, -3.14]));

