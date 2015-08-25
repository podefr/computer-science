"use strict";

module.exports = function dfs(adjencyList, startNode, callback) {
    var visited = Object.create(null);

    function mark(node) {
        visited[node] = true;
    }

    function isUnvisited(node) {
        return !visited[node];
    }

    function dfs_recursive(node) {
        var adjacent = adjencyList[node];

        mark(node);

        callback(node);

        adjacent.forEach(function (adjacentNode) {
            if (isUnvisited(adjacentNode)) {
                dfs_recursive(adjacentNode);
            }
        });
    }

    dfs_recursive(startNode);
};