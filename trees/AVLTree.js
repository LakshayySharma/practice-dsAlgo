const { BSTTree, BSTTreeNode } = require("./BST");

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class AVLTree extends BSTTree {
  constructor(root) {
    super(root);
    this.root = root;
  }

  getNodeHeight(node) {
    if (node == null) {
      return -1;
    }

    return (
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1
    );
  }

  getBalanceFactor(node) {
    let balanceFactor =
      this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    return balanceFactor;
  }

  rotationLL(node = this.root) {
    debugger;
    const temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp;
  }

  rotationRR(node = this.root) {
    debugger;
    const temp = node.right;
    node.right = temp.left;
    temp.left = node;
    return temp;
  }

  rotationLR(node = this.root) {
    debugger;
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }

  rotationRL(node = this.root) {
    debugger;
    node.left = this.rotationLL(node.left);
    return this.rotationRR(node);
  }

  insert(node) {
    debugger;
    this.root = this.insertNode(this.root, node);
  }

  insertNode(root, node) {
    debugger;
    if (root == null) {
      return new TreeNode(node);
    } else if (root.data > node) {
      root.left = this.insertNode(root.left, node);
    } else if (root.data < node) {
      root.right = this.insertNode(root.right, node);
    } else {
      return root;
    }

    let balanceFactor = this.getBalanceFactor(root);
    if (balanceFactor == 2) {
      if (node < root.left.data) {
        root = this.rotationLL(root);
      } else {
        return this.rotationLR(root);
      }
    }
    if (balanceFactor == -2) {
      if (node > root.right.data) {
        root = this.rotationRR(root);
      } else {
        return this.rotationRL(root);
      }
    }
    return root;
  }

  remove(key) {
    this.root = this.removeNode(key, this.root);
  }
  removeNode(node, key) {
    node = super.removeNode(node, key);
    if (node == null) {
      return node;
    }

    let balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor == -2) {
      let balanceFactorRight = this.getBalanceFactor(node.right);
      if (balanceFactorRight == -1 || balanceFactorRight == 0) {
        return this.rotationRR(node);
      }
      if (balanceFactor == 1) {
        return this.rotationRL(node);
      }
    }

    if (balanceFactor == 2) {
      let balanceFactorLeft = this.getBalanceFactor(node.left);
      if (balanceFactorLeft == 1 || balanceFactorLeft == 0) {
        return this.rotationLL(node);
      }
      if (balanceFactor == -1) {
        return this.rotationLR(node);
      }
    }
    return node;
  }
}

module.exports = { AVLTree };
