var bsearch = require("./index");

console.log("\nnumbers\n=========\n");

console.log(bsearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], -1));
console.log(bsearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0));
console.log(bsearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(bsearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 6));
console.log(bsearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
console.log(bsearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
console.log(bsearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 5.5));
console.log(bsearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "a"));
console.log(bsearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], {}));

console.log("\nletters\n=========\n");

// "A" < "a"
console.log(bsearch(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "A"));
console.log(bsearch(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "a"));
console.log(bsearch(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "b"));
console.log(bsearch(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "e"));
console.log(bsearch(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "f"));
console.log(bsearch(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "g"));
console.log(bsearch(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "h"));
console.log(bsearch(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "k"));
console.log(bsearch(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "l"));
console.log(bsearch(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "m"));
console.log(bsearch(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "m"));
console.log(bsearch(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "Olivier"));
console.log(bsearch(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], 0));