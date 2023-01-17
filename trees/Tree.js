class Tree {
  constructor(root) {
    this.root = root;
  }

  preOrder(root = this.root) {
    if (root == null) {
      return;
    } else {
      console.log(root.data);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  postOrder(root = this.root) {
    if (root == null) {
      return;
    } else {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.data);
    }
  }

  inOrder(root = this.root) {
    if (root == null) {
      return;
    } else {
      this.inOrder(root.left);
      console.log(root.data);
      this.inOrder(root.right);
    }
  }

  levelOrder() {
    let q = [];
    q.push(this.root);
    while (q.length != 0) {
      let temp = q.shift();
      console.log(temp.data);
      if (temp.left) {
        q.push(temp.left);
      }
      if (temp.right) {
        q.push(temp.right);
      }
    }
  }
}

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = { Tree, TreeNode };
