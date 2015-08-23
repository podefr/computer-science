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