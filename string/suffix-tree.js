"use strict";

function SuffixTreeNode(string) {
    const node = {};

    this.add = function add(prefix) {
        if (!(prefix in node)) {

        }
    };

}

function SuffixTree(string) {
    const suffixTree = new SuffixTreeNode();

    initSuffixTree();

    function initSuffixTree() {
        for (let i = 0, l = string.length; i < l; i++) {
            suffixTree.add(string.slice(0, i + 1));
        }
    }
}

new SuffixTree("xabxac");