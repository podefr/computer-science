"use strict";

module.exports = function dfs(adjencyList, startNode, callback) {

    var queue = [startNode];
    var discovered = Object.create(null);
    var current;

    markDiscovered(startNode);

    while (queue.length) {
        current = queue.shift();

        callback(current);

        adjencyList[current].forEach(function (adjacentNode) {
            if (!isDiscovered(adjacentNode)) {
                queue.push(adjacentNode);
                markDiscovered(adjacentNode);
            }
        });
    }

    function isDiscovered(node) {
        return discovered[node];
    }

    function markDiscovered(node) {
        discovered[node] = true;
    }
};