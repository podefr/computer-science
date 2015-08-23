"use strict";

module.exports = function Text(text) {
    var textLength = text.length;

    this.search = function search(searchString) {
        var searchStringLength = searchString.length;
        var positions = [];

        for (var i = 0; i < textLength; i++) {
            if (text[i] === searchString[0]) {
                if (text.slice(i, i + searchStringLength) == searchString) {
                    positions.push(i);
                    i + searchStringLength;
                }
            }
        }

        return positions;
    };

    this.highlight = function mark(searchString) {
        return text.replace(new RegExp(searchString, "g"), "<em>" +  searchString + "</em>");
    };

    /**
     * Finds if it's a palindrom using temp arrays and strings
     * @returns {boolean}
     */
    this.isPalindrom = function isPalindrom() {
        var textToTest = text.replace(/ /g, "").toLowerCase();

        return textToTest
                .split('')
                .reverse()
                .join('') === textToTest;
    };

    /**
     * Finds if it's a palindrom in place with 0(n) time without extra data structures
     * @returns {boolean}
     */
    this.isPalindromInPlace = function isPalindromInPlace() {
        var leftCursor = 0;
        var rightCursor = text.length - 1;
        var middle = Math.floor(rightCursor / 2);
        var same = true;

        while (same && leftCursor < middle) {
            while (text[leftCursor] == " ") {
                leftCursor++;
            }

            while (text[rightCursor] == " ") {
                rightCursor--;
            }

            same = text[leftCursor].toLowerCase() == text[rightCursor].toLowerCase();
            leftCursor++;
            rightCursor--;
        }

        return same;
    };

    /**
     * Finds all permutations of a given string. It runs in O(n!)
     * I copied this, I need to analyze it further
     * @returns {Array} an array of strings
     */
    this.permute = function permute() {
        var permutations = [];

        function doPermute(arrayString, memo) {
            var current;
            memo = memo || [];

            for (var i = 0; i < arrayString.length; i++) {
                current = arrayString.splice(i, 1);
                if (!arrayString.length) {
                    permutations.push(memo.concat(current).join(""));
                }
                doPermute(arrayString.slice(), memo.concat(current));
                arrayString.splice(i, 0, current[0]);
            }

            return permutations;
        }

        return doPermute(text.split(""));
    };
};