var dfs = require("./dfs");

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

dfs(tree, "A", function (node) {
    console.log(node);
});
