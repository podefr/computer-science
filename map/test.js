var HashMap = require("./index");

var hash = new HashMap();

var keyA = {key: "a"};
var objA = {value: "a"};

var keyB = {key: "b"};
var objB = {value: "b"};

var keyC = {key: "c"};
var objC = {value: "c"};

hash.set(keyA, objA);
hash.set(keyB, objB);
hash.set(keyC, objC);

console.log(hash.get(keyA));

console.log(hash.length());

console.log(hash.set(keyA, {key: "a2"}));

console.log(hash.get(keyA));

console.log(hash.del(keyA));

console.log(hash.length());

console.log(hash.has(keyC));
console.log(hash.has({}));
console.log(hash.keys());


console.log(JSON.stringify(hash.keys()));

hash.forEach(function () {
   console.log(arguments);
});
