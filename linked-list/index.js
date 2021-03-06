"use strict";

module.exports = function LinkedList(items) {
    var _head;
    var _foot;
    var _length = 0;

    this.add = function add(item) {
        _length++;

        if (!_head) {
            _head = createNode(item);
            _foot = _head;
        } else {
            _foot.next = createNode(item);
            _foot = _foot.next;
        }
    };

    this.delete = function delete_(item) {
        if (_head.item === item) {
            if (_head.next) {
                _head = _head.next;
            } else {
                _head = null;
            }
            return;
        }

        traverse(function (node) {
            var nextItem = node.next;
            if (nextItem && nextItem.item === item) {
                if (nextItem.next) {
                    node.next = nextItem.next;
                } else {
                    // otherwise its the foot so we need to move the foot up one node
                    _foot = node;
                }
            }
        });
    };

    this.insert = function insert(item, position) {
        var newItem;

        var previousItem = traverse(function () {
            return !--position;
        });

        if (previousItem) {
            newItem = createNode(item);
            newItem.next = previousItem.next;
            previousItem.next = newItem;
        }
    };

    this.get = function get(index) {
        var node = traverse(function () {
            return !index--;
        });
        if (node) {
            return node.item;
        }
    };

    this.has = function has(item) {
        return !!traverse(function (node) {
            return node.item === item;
        });
    };

    this.length = function length() {
        return _length;
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

    if (items) {
        items.forEach(function (item) {
            this.add(item);
        }, this);
    }

    function createNode(item) {
        return {
            item: item,
            next: null
        }
    }

    function traverse(callback) {
        var current = _head;

        if (callback(_head)) {
            return _head;
        }

        while (current.next) {
            current = current.next;

            if (callback(current)) {
                return current;
            }
        }
    }
};