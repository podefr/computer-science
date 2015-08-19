/**
 * Square root - https://github.com/podefr/computer-science/
 * Copyright(c) 2015 Olivier Scherrer <pode.fr@gmail.com>
 * MIT Licensed
 */
function squareRootNaive(number, max, min, i) {

    // The square root of number has to be between 1 and itself
    var min = min || 1,
        max = max || number,
        precision = 1e10,
        i = i || 1,
        guess,
        squared;

    i++;

    guess = (max + min) / 2;
    squared = guess * guess;

    if ((squared - 1 / precision) <= number &&
        (squared + 1 / precision) >= number) {
        return [Math.floor(guess * 1e10) / 1e10, i];
        // guess is too high
    } else if (squared > number) {
        return squareRootNaive(number, guess, min, i);
        // guess is too low
    } else {
        return squareRootNaive(number, max, guess, i);
    }
}

function squareRootBabylonian(number, guess, i) {

    i = i || 1;
    i++;

    guess = guess || number / 2;

    var divided = number / guess;

    var newGuess = (divided + guess) / 2;

    if (guess === newGuess) {
        return [newGuess, i];
    }

    return squareRootBabylonian(number, newGuess, i)
}


module.exports = {
    naive: squareRootNaive,
    babylonian: squareRootBabylonian
};