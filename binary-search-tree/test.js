var BST = require("./index");

var bst = new BST;

var array = [5, 10, 15, 20, 25, 30];

bst.addArray(array);


console.log(bst.getHead());

console.log("array", bst.toArray());

console.log("size", bst.size());

bst.forEach(function (item) {
   console.log(item);
});

console.log("erase ----");

bst.erase();


console.log("insert items unbalanced");

array.forEach(bst.insert, bst);

console.log("depth is", bst.depth());
console.log(bst.getHead());

bst.delete(20);

console.log("new depth", bst.depth());
console.log(bst.getHead());
