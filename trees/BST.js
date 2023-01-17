const { TreeNode, Tree } = require("./Tree");

class BSTTree extends Tree {
  constructor(root) {
    super(root);
    this.root = root;
  }

  insert(node) {
    if (this.root == null) {
      this.root = new TreeNode(node);
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    // debugger;
    if (root.data > node) {
      if (root.left == null) {
        root.left = new TreeNode(node);
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right == null) {
        root.right = new TreeNode(node);
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  minNode(root = this.root) {
    if (root.left == null) {
      return root;
    } else {
      this.minNode(root.left);
    }
  }

  maxNode(root = this.root) {
    if (root.right == null) {
      return root;
    } else {
      this.maxNode(root.right);
    }
  }

  search(key) {
    return this.searchNode(key, this.root);
  }

  searchNode(key, root = this.root) {
    debugger;
    if (root == null) {
      return false;
    }
    if (key == root.data) {
      return true;
    }
    if (key < root.data) {
      return this.searchNode(key, root.left);
    } else if (key > root.data) {
      return this.searchNode(key, root.right);
    } else {
      return false;
    }
  }

  remove(key) {
    this.removeNode(key, this.root);
  }

  removeNode(key, root) {
    debugger;
    if (root == null) {
      return null;
    }
    if (key < root.data) {
      root.left = this.removeNode(key, root.left);
      return root;
    } else if (key > root.data) {
      root.right = this.removeNode(key, root.right);
      return root;
    } else {
      if (root.left == null && root.right == null) {
        root = null;
        return root;
      }
      if (root.left == null) {
        root = root.right;
        return root;
      } else if (root.right == null) {
        root = root.left;
        return root;
      }
      const temp = this.minNode(root.right);
      root.data = temp.data;
      root.right = this.removeNode(temp.data, root.right);
      return root;
    }
  }
}

module.exports = { BSTTree };
