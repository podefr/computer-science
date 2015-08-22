var assert = require("assert");

var bsearch = require("./index");

[
    [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], -1, "-1 not found"],
    [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0, 0],
    [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 3],
    [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 6, 6],
    [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 9, 9],
    [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, "10 not found"],
    [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 5.5, "5.5 not found"],
    [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "a", "a invalid type"],
    [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], {}, "[object Object] invalid type"],
    // "A" < "a"
    [["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "A", "A not found"],
    [["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "a", 0],
    [["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "b", 1],
    [["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "e", 4],
    [["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "f", 5],
    [["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "g", 6],
    [["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "h", 7],
    [["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "k", 10],
    [["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "l", 11],
    [["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "m", "m not found"],
    [["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], "Olivier", "Olivier not found"],
    [["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], 0, "0 invalid type"]
].forEach(function (test) {
    var array = test[0],
        search = test[1],
        expected = test[2];

    var actual = bsearch(array, search);

    assert(actual === expected);

    console.log("Searching", search, "in", JSON.stringify(array), " result is", actual);
});