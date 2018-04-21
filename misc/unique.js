// find non unique

const array = [0, 1, 2, 3, 3, 4 , 5, 6, 6, 7, 8, 9, 9];

// O(n2) time complexity
// O(1) space complexity
console.log(array.filter(val => array.indexOf(val) !== array.lastIndexOf(val)));

// O(n) time complexity (3n)
// O(n) space complexity
const nonUnique = [];

array.reduce((accum, value) => {
    if (accum[value]) {
        nonUnique.push(value);
    }
    accum[value] = true;

    return accum;
}, {});

console.log(nonUnique);