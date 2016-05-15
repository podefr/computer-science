/**
 * Same here, still trying to understand this one
 * @param array
 * @returns {*}
 */

function permutate(array) {
    var permutations = [];

    function doPermute(words, permutation) {
        permutation = permutation || "";

        if (!words.length) {
            permutations.push(permutation);
            return;
        }

        words[0].split('').forEach(function (char) {
            doPermute(words.slice(1), permutation + char);
        });

        return permutations;
    }

    return doPermute(array);
}

console.log(permutate(["red", "fox", "super"]));