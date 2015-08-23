var Text = require("./index");

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

var permutations = new Text("ABCD");
console.log(permutations.permute());
console.log(permutations.permute2());
