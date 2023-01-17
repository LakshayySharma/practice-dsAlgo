class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(node) {
    this.head = node;
  }

  insertFirst(data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
    return this.head;
  }

  insertLast(data) {
    let node = new Node(data);
    let temp = this.head;
    if (!this.head) {
      this.insertFirst(data);
      return this.head;
    }
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = node;
    return this.head;
  }

  deleteNode(data) {
    let temp = this.head;
    if (this.head.data === data) {
      this.head = this.head.next;
      return this.head;
    }

    while (temp.next != null) {
      if (temp.next.data === data) {
        temp.next = temp.next.next;
        return this.head;
      }
      temp = temp.next;
    }
  }

  printList() {
    console.log("\n");
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

module.exports = LinkedList;
