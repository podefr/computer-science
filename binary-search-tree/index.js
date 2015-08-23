"use strict";

module.exports = function BST() {

    var _size = 0;
    var _head;

    this.insert = function insert(item) {
        if (!_head) {
            _head = createNode(item);
            _size++;
        } else {
            addToParentNode(item);
        }
    };

    this.delete = function delete_() {

    };

    this.forEach = function forEach() {

    };

    this.search = function search() {

    };

    this.size = function size() {
        return _size;
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