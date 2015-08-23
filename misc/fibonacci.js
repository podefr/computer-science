function fibonacci(n) {
    if (n < 2) {
        return 1;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

function memoizedFibonacci(n) {
    var cache = [];

    function _fibonacci(n) {
        if (n < 2) {
            return 1;
        } else {
            if (cache[n]) {
                return cache[n];
            } else {
                return cache[n] = _fibonacci(n-1) + _fibonacci(n-2);
            }
        }
    }

    return _fibonacci(n);
}

console.time("non memoized");

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(7));
console.log(fibonacci(15));
console.log(fibonacci(30));
console.log(fibonacci(40));

console.timeEnd("non memoized");

console.time("memoized");

console.log(memoizedFibonacci(1));
console.log(memoizedFibonacci(2));
console.log(memoizedFibonacci(7));
console.log(memoizedFibonacci(15));
console.log(memoizedFibonacci(30));
console.log(memoizedFibonacci(40));
console.log(memoizedFibonacci(400));

console.timeEnd("memoized");

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
