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

var print = [];

dfs(tree, "A", function (node, depth) {
    print[depth] = print[depth] || [];
    print[depth].push(node);
});

print.forEach(function (row) {
    console.log(row.join(""));
});
