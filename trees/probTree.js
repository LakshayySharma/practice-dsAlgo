const { BSTTree } = require("./BST.js");
const { TreeNode } = require("./Tree");

const LinkeList = require("../linked list/LinkedList");

let tree1 = new BSTTree();
function insertIntoTree(tree, arr) {
  for (let i = 0; i < arr.length; i++) {
    tree.insert(arr[i]);
  }
}

insertIntoTree(tree1, [4, 2, 6, 1, 3, 5, 7]);
// debugger;
tree1.levelOrder();

// function createMinBST(arr) {
//   return createMinBSTHelper(arr, 0, arr.length - 1);
// }

// function createMinBSTHelper(arr, start, end) {
//   debugger;
//   if (end < start) {
//     return null;
//   }
//   let middle = Math.floor((start + end) / 2);
//   let node = new TreeNode(arr[middle]);

//   node.left = createMinBSTHelper(arr, start, middle - 1);
//   node.right = createMinBSTHelper(arr, middle + 1, end);
//   //   console.log(node);
//   return node;
// }

// console.log(createMinBST([1, 2, 3, 4, 5]));

function levelOrderLinkedList(tree) {
  let q = [];
  let arr = [];
  let linkedListArr = [];
  q.push(tree.root);
  if (!tree.root) {
    return null;
  }
  arr.push(tree.root.data);
  while (q.length !== 0) {
    let list = new LinkeList();
    for (let i = 0; i < arr.length; i++) {
      list.insertLast(arr[i]);
    }
    linkedListArr.push(list);
    arr = [];
    let temp = q.shift();
    if (temp.right) {
      q.push(temp.right);
      arr.push(temp.right.data);
    }
    if (temp.left) {
      q.push(temp.left);
      arr.push(temp.left.data);
    }
  }
  debugger;
  console.log(linkedListArr);
}

levelOrderLinkedList(tree1);
