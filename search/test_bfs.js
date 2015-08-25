var bfs = require("./bfs");

//       A
//     /   \
//    B     C
//   / \   / \
//  D  E  F   G

var tree =  {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "F", "G"],
    "D": ["B"],
    "E": ["B"],
    "F": ["C"],
    "G": ["C"]
};

bfs(tree, "A", function (node) {
    console.log(node);
});
