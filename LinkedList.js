class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(node) {
    node.next = this.head;
    this.head = node;
  }
}

const node1 = new Node("node1");
const node2 = new Node("node2");
const list = new LinkedList();
node1.next = node2;
console.log(node1);
list.head = node1;
const node3 = new Node("node3");
list.insertFirst(node3);
console.log(list);
