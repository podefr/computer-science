var BST = require("./index");

var bst = new BST;

bst.insert(20);
bst.insert(20);
bst.insert(10);
bst.insert(5);
bst.insert(30);
bst.insert(30);
bst.insert(15);


console.log(bst.getHead());

console.log(bst.toArray());

console.log(bst.size());

bst.forEach(function (item) {
   console.log(item);
});