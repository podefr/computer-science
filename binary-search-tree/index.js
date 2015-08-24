"use strict";

module.exports = function BST() {

    var _head;

    this.addArray = function addArray(array) {
        var pivot;

        if (array.length) {
            pivot = Math.floor(array.length / 2);
            this.insert(array[pivot]);
            this.addArray(array.slice(0, pivot));
            this.addArray(array.slice(pivot + 1));
        }
    };

    this.flatten = function flatten() {
        var array = this.toArray();
        this.erase();
        this.addArray(array);
    };

    this.erase = function erase() {
        _head = null;
    };

    this.insert = function insert(item) {
        if (!_head) {
            _head = createNode(item);
        } else {
            addToParentNode(item);
        }
    };

    this.delete = function delete_(item) {

    };

    this.forEach = function forEach(func, scope) {
        traverse(function (node) {
            func.call(scope, node.item);
        });
    };

    this.toArray = function toArray() {
        var array = [];
        traverse(function (node) {
            array.push(node.item);
        });
        return array;
    };

    this.length = function length() {
        var count = 0;
        traverse(function () {
            count++;
        });
        return count;
    };

    this.depth = function depth() {
        var _bstDepth = 0;
        traverse(function (node, nodeDepth) {
            _bstDepth = nodeDepth > _bstDepth ? nodeDepth : _bstDepth;
        });

        return _bstDepth;
    };

    this.getHead = function getHead() {
        return _head;
    };

    function createNode(item) {
        return {
            item: item,
            left: null,
            right: null
        }
    }

    function traverse(callback) {
        function inOrder(current, depth) {
            depth = depth || 0;

            if (current.left) {
                inOrder(current.left, depth + 1);
            }

            callback(current, depth);

            if (current.right) {
                inOrder(current.right, depth + 1);
            }
        }
        inOrder(_head);
    }

    function addToParentNode(item, current) {
        current = current || _head;

        if (item > current.item) {
            if (!current.right) {
                current.right = createNode(item);
            } else {
                addToParentNode(item, current.right);
            }
        }

        if (item < current.item) {
            if (!current.left) {
                current.left = createNode(item);
            } else {
                addToParentNode(item, current.left);
            }
        }
    }
};