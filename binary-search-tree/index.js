"use strict";

module.exports = function BST() {

    var _head;

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

    this.size = function size() {
        var count = 0;
        traverse(function () {
            count++;
        });
        return count;
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
        function inOrder(current) {
            if (current.left) {
                inOrder(current.left);
            }

            callback(current);

            if (current.right) {
                inOrder(current.right);
            }
        }
        inOrder(_head);
    }

    function addToParentNode(item, current) {
        current = current || _head;

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