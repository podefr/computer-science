var BST = require("./index");

var bst = new BST;

bst.addArray([5, 10, 15, 20, 25, 30]);


console.log(bst.getHead());

console.log("array", bst.toArray());

console.log(bst.length());

bst.forEach(function (item) {
   console.log(item);
});

console.log("erase ----");

bst.erase();


console.log("insert items unbalanced");

bst.insert(5);
bst.insert(10);
bst.insert(15);
bst.insert(20);
bst.insert(25);
bst.insert(30);

console.log("depth is", bst.depth());
console.log(bst.getHead());

bst.flatten();

console.log("new depth", bst.depth());
console.log(bst.getHead());
