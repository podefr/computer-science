// Current status: 166 bytes (:()

function m(a, b, n) {
    while (a.length || b.length) n.push((a[0] < b[0] || !b.length ? a : b).shift());
    return n;
}

function s(a, l) {
    l = a.length;
    return l < 2 ? a : m(s(a.splice(-~~l / 2)), s(a), []);
}

console.log(s("MERGESORT".split("")));
console.log(s([-10, 3.4, 1, 6.5, 12, -3.14]));

// the 0 here shouldn't break the while loop in the merge function
console.log(s([-10, 3.4, 1, 6.5, 0, -3.14]));

