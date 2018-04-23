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

function iterativeFibonnaci(n) {
    // Array with n items which starts with 0, 1, all subsequent items are 1s so that reduce can run but the values
    // will be replaced with the appropriate number from the suite
    const array = new Array(n).fill(1);
    array[0] = 0;

    array.reduce((previous, current, idx) => {
        if (idx < 2) return idx;
        array[idx] = array[idx-1] + array[idx -2];

        return array[idx];
    }, 0);

    return array;
}

// in O(n) time and O(1) space
function constantSpaceFibonnaci(n) {
    let previous = 0;
    let current = 1;
    let temp;

    if (n < 2) {
        return n;
    }

    while (n--) {
        temp = current;
        current = current + previous;
        previous = temp;
    }

    return current;
}

// in O(n) time and O(1) space using generators
function *generateFibonnaci() {
    let previous = 0;
    let current = 1;
    let temp;

    yield 0;
    yield previous;
    yield current;

    while (true) {
        temp = current;
        current = current + previous;
        previous = temp;

        yield current;
    }
}

// console.time("non memoized");
//
// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(7));
// console.log(fibonacci(15));
// console.log(fibonacci(30));
// console.log(fibonacci(40));
//
// console.timeEnd("non memoized");
//
// console.time("memoized");
//
// console.log(memoizedFibonacci(1));
// console.log(memoizedFibonacci(2));
// console.log(memoizedFibonacci(7));
// console.log(memoizedFibonacci(15));
// console.log(memoizedFibonacci(30));
// console.log(memoizedFibonacci(40));
// console.log(memoizedFibonacci(400));
//
// console.timeEnd("memoized");
//
// // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
// console.log(iterativeFibonnaci(400)[399]);
console.log(constantSpaceFibonnaci(400));

let iterator = generateFibonnaci();

let i = 10;

while (i--) {
    console.log(iterator.next().value);
}
