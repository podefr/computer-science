"use strict";

function Text(text) {
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
}


var text = new Text("adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. " +
"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi" +
" consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, " +
"vel illum qui dolorem eum fugiat quo voluptas nulla pariatur");

console.log(text.search("vel"));
console.log(text.highlight("vel"));
console.log(text.isPalindrom());

var palindrom = new Text("Engage le jeu que je le gagne");

console.log(palindrom.isPalindrom());
console.log(palindrom.isPalindromInPlace());

var notPalindrom = new Text("Engage le jeuque je le ggne");

console.log(notPalindrom.isPalindrom());
console.log(notPalindrom.isPalindromInPlace());