var squareRoot = require("./index");

[654867897, 36, 2, 65464324897].forEach(executeSqrtForNumber);

function executeSqrtForNumber(number) {
    Object.keys(squareRoot).forEach(function (func) {
        console.time(func);
        var result;

        try {
            result = squareRoot[func](number);
            console.log("Sqrt(", number, ")  = ", result[0], "in",  result[1], "iterations with", func, "method");

        } catch (err) {
            console.log(err);
        }

        console.timeEnd(func);
        console.log("\n");
    });
}