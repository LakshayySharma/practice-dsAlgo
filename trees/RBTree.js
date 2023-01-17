const Colors = {
  RED: "red",
  BLACK: "black",
};
class RBTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.color = Colors.RED;
    this.parent = null;
  }

  isRed() {
    return this.color === Colors.RED;
  }
}

class RBTree {
  constructor(root) {
    this.root = root;
  }

  insert(node) {
    if (this.root == null) {
      this.root = new RBTreeNode(node);
      this.root.color = Colors.BLACK;
    } else {
      let newNode = this.insertNode(node, this.root);
      this.checkProp(newNode);
    }
  }

  insertNode(key, node) {
    if (key < node.data) {
      if (node.left == null) {
        node.left = new RBTreeNode(key);
        node.left.parent = node;
        return node.left;
      } else {
        return this.insertNode(key, node.left);
      }
    }
    if (key > node.right) {
      if (node.right == null) {
        node.right = new RBTreeNode(key);
        node.right.parent = node;
        return node.right;
      } else {
        return this.insertNode(key, node.right);
      }
    }
  }
  checkProp(node) {}
}
