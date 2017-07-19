"use strict";

function buildSuffixTree(string) {
    const suffixTree = {};

    for (let i = 0, stringLength = string.length; i < stringLength; i++) {
        let leafIndex = i + 1;
        for (let j = 0; j < i + 1; j++) {
            extendTree(string.slice(j, leafIndex), leafIndex)
        }
    }

    function extendTree(substring, index, node) {
        node = node || suffixTree;

        if (!Object.keys(node).length) {
            node[substring] = index;
            return;
        }

        let edgeToExtend = substring.slice(0, substring.length - 1);
        let nextChar = substring.slice(-1);

        // Rule 1: the path leads to a leaf edge so we add the next char
        if (isLeafEdge(node[edgeToExtend])) {
            node[substring] = node[edgeToExtend];
            delete node[edgeToExtend];
            return;
        }

        // test if edgeToExtend is in a path on the current node
        let path = getPath(node, edgeToExtend);

        if (path) {
            return;
        } else if (!node[substring]) {
            node[substring] = index;
        }
        //} else {
        //    node[edgeToExtend] = {};
        //    node[edgeToExtend][nextChar] = index;
        //    node[edgeToExtend][path.slice(edgeToExtend.length, path.length)] = node[path];
        //    delete node[path];
        //}

    }

    function getPath(node, edge) {
        return Object.keys(node).filter(label => label.startsWith(edge)).pop();
    }

    // is leaf edge value is a number and not a node
    function isLeafEdge(edge) {
        return typeof edge === "number";
    }

    return suffixTree;
}

console.log(buildSuffixTree("xabx"));
//console.log(buildSuffixTree("mississippi"));