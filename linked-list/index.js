"use strict";

module.exports = function LinkedList() {
    var _head;
    var _foot;
    var _length = 0;

    this.insert = function insert(item) {
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
            }
        }

        traverse(function (node) {
            var nextItem = node.next;
            if (nextItem && nextItem.item === item) {
                if (nextItem.next) {
                    node.next = nextItem.next;
                }
            }
        });
    };

    this.has = function has(item) {
        return !!traverse(function (node, next) {
            var hasItem = node.item === item ||
                    next && next.item === item;

            return hasItem;
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

    function createNode(item) {
        return {
            item: item,
            next: null
        }
    }

    function traverse(callback) {
        var current = _head;
        while (current.next) {
            if (callback && callback(current, current.next)) {
                return current;
            }
            current = current.next;
        }
    }
};