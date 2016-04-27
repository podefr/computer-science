// 140 bytes merge sort function
function m(e,r,g,s){g=e.length;if(g<2)return e;for(r=m(e.splice(~~g/2)),e=m(e),s=[];g--;)s.push((e[0]<r[0]|!r.length?e:r).shift());return s}

// tests
console.log(m("MERGESORT".split("")));
console.log(m([-10, 3.4, 1, 6.5, 12, -3.14]));
console.log(m([-10, 3.4, 1, 6.5, 0, -3.14]));

// Annotated:

// e: the original array to sort
// r: will be used to store half of the original array
// g: will store the length of the original array
// s: will store the new sorted array that's returned
function annotatedM(e,r,g,s) {
    g = e.length;

    // If the length is one or less, the array is sorted, we can return it
    if (g<2) return e;

    // Otherwise, split the array in halves with
    // splice(~~g/2) which effectively does splice(Math.floor(lengthOriginalArray / 2))
    // and call merge sort and each halves of the array, save the result, and kick off a loop to merge both
    // sorted arrays (r,e) into a new array (s)
    for (r=m(e.splice(~~g/2)), e=m(e), s=[]; g--;)
        // here we merge the two sorted arrays
        // by taking the smallest value at position 0 of each array.
        // because of how we split, we may have one more item in the left hand side array (e),
        // so the condition !r.length ensures that if the other one's empty (r) we automatically pick from e.
        // the binary or (|) saves an extra char and works fine in our case
        s.push((e[0] < r[0] | !r.length ? e : r).shift());

    // Finally, we return the merged arrays
    return s;
}