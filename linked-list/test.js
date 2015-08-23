"use strict";

var LinkedList = require("./index");

var linkedList = new LinkedList();

linkedList.add(0);
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);

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
linkedList.delete(3);

console.log(linkedList.toArray());

linkedList.add(5);
linkedList.add(6);

console.log(linkedList.toArray());

var linkedList2 = new LinkedList([{id: 1}, {id: 2}, {id: 3}, {id: 4}]);

console.log(linkedList2.toArray());

var item2 = linkedList2.get(1);
linkedList2.delete(item2);
linkedList2.insert(item2, 2);

console.log(linkedList2.toArray());
