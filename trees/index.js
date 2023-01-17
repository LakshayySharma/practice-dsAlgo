const { Tree, TreeNode } = require("./Tree");
const { BSTTree, BSTTreeNode } = require("./BST");
const { AVLTree } = require("./AVLTree");

let avlTree = new AVLTree();
avlTree.insert(3);
avlTree.insert(2);
avlTree.insert(5);
avlTree.insert(4);
avlTree.insert(8);
avlTree.insert(12);
console.log(avlTree.root);

console.log(avlTree.root);
// let avlTree = new BSTTree();
// avlTree.insert(3);
// avlTree.insert(2);
// avlTree.insert(5);
// avlTree.insert(4);
// avlTree.insert(8);
// avlTree.insert(12);
// console.log(avlTree.root);

// avlTree.remove(5);
