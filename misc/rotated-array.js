const rotatedArray = [4, 5, 6, 7, 8, 9, 0, 1, 2, 3];

function unrotate(array) {
    let rotationPoint;

    // in O(n) average and best
    // array.reduce((current, next, idx) => {
    //     if (current > next) {
    //         rotationPoint = idx;
    //     }
    //
    //     return next;
    // });

    // in O(n) worst
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i+1] < array[i]) {
    //         rotationPoint = i+1;
    //         break;
    //     }
    // }

    // in O(log n)
    rotationPoint = (function search(min, max) {
        const pivot = Math.floor(((max - min) / 2)) + min;

        if (min === max) {
            // not rotated
            return 0;
        }

        if (array[pivot] > array[pivot + 1]) {
            return pivot + 1;
        } else {
            if (array[pivot] > array[max]) {
                return search(pivot + 1, max);
            } else {
                return search(min, pivot);
            }
        }
    })(0, rotatedArray.length - 1);


    console.log(rotationPoint);

    return [...array.slice(rotationPoint, array.length), ...array.slice(0, rotationPoint)];
}

console.log(unrotate(rotatedArray));
console.log(unrotate([0, 1, 2, 3, 4, 5, 6, 7, 8]));