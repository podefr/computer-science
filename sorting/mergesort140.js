function m(a, b, n) {
    while (a[0] || b[0]) n.push((a[0] < b[0] || !b.length ? a : b).shift());
    return n;
}

function s(a, l) {
    l = a.length;
    return l < 2 ? a : m(s(a.splice(0, ~~l / 2)), s(a), []);
}

console.log(s("MERGESORT".split("")));
console.log(s([-10, 3.4, 1, 6.5, 12, -3.14]));

