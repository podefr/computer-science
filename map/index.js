module.exports = function HashMap() {

    var _keys = [];
    var _values = [];

    this.keys = function keys() {
        return _keys;
    };

    this.values = function values() {
        return _values;
    };

    this.set = function set(key, value) {
        var index;

        if (this.has(key)) {
            index = _keys.indexOf(key);
            _values[index] = value;
        } else {
            _keys.push(key);
            _values.push(value);
        }
    };

    this.get = function get(key) {
        var index = _keys.indexOf(key);
        return _values[index];
    };

    this.forEach = function forEach(func, scope) {
        _keys.forEach(function (key, index) {
            func.call(scope, _values[index], key);
        });
    };

    this.del = function del(key) {
        var index = _keys.indexOf(key);
        if (index != -1) {
            _keys.splice(index, 1);
            _values.splice(index, 1);
            return true;
        } else {
            return false;
        }
    };

    this.has = function has(key) {
        return _keys.indexOf(key) != -1;
    };

    this.length = function length() {
        return _keys.length;
    };
};