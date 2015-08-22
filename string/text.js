"use strict";

function Text(text) {
    this.search = function search(searchString) {
        var searchStringLength = searchString.length;
        var textLength = text.length;
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
        return text.split(searchString).join("<em>" +  searchString + "</em>");
    };
}


var text = new Text("adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. " +
"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi" +
" consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, " +
"vel illum qui dolorem eum fugiat quo voluptas nulla pariatur");

console.log(text.search("vel"));
console.log(text.highlight("vel"));