"use strict";

var LinkedList = require("./index");

var linkedList = new LinkedList();

linkedList.insert(0);
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);

console.log(linkedList.length());

console.log(linkedList.has(0), "0");
console.log(linkedList.has(1), "1");
console.log(linkedList.has(2), "2");
console.log(linkedList.has(3), "3");
console.log(linkedList.has(-1), "-1");
console.log(linkedList.has(5), "5");

linkedList.forEach(function (item) {
   console.log(item);
});

console.log(linkedList.toArray());

console.log(linkedList.get(0));
console.log(linkedList.get(1));
console.log(linkedList.get(2));
console.log(linkedList.get(3));
console.log(linkedList.get(5));

linkedList.delete(2);

console.log(linkedList.toArray());



var linkedList2 = new LinkedList([{id: 1}, {id: 2}, {id: 3}]);

console.log(linkedList2.toArray());