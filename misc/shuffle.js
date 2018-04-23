const sortedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffleCopy(array) {
    const copy = [...array];
    const shuffledArray = [];

    while (copy.length) {
        shuffledArray.push(copy.splice(Math.floor(copy.length * Math.random()), 1)[0]);
    }

    return shuffledArray;
}

function shuffleInPlace(array) {
    const length = array.length;
    array.forEach((val, idx) => {
        const randomPosition = Math.floor(Math.random() * length);
        array[idx] = array[randomPosition];
        array[randomPosition] = val;
    });
}


console.log(shuffleCopy(sortedArray));

shuffleInPlace(sortedArray);

console.log(sortedArray);