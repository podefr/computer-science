"use strict";

module.exports = function dfs(adjencyList, startNode, callback) {
    var visited = Object.create(null);

    function mark(node) {
        visited[node] = true;
    }

    function isUnvisited(node) {
        return !visited[node];
    }

    function dfs_recursive(node, depth) {
        depth = depth || 0;

        var adjacent = adjencyList[node];

        mark(node);

        callback(node, depth);

        adjacent.forEach(function (adjacentNode) {
            if (isUnvisited(adjacentNode)) {
                dfs_recursive(adjacentNode, depth++);
            }
        });
    }

    dfs_recursive(startNode);
};