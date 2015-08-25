var bfs = require("./bfs");

// Note that we've switched G and B to prove that the BFS works
//       A
//     /   \
//    G     C
//   / \   / \
//  D  E  F   B

var tree =  {
    "A": ["G", "C"],
    "G": ["A", "D", "E"],
    "E": ["G"],
    "F": ["C"],
    "B": ["C"],
    "C": ["A", "F", "B"],
    "D": ["G"]
};

bfs(tree, "A", function (node) {
    console.log(node);
});
