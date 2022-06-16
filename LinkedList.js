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

  //insert at 1st position
  insertFirst(node) {
    node.next = this.head;
    this.head = node;
  }

  //get size of linked list
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  //get first element of linked list
  getFirst() {
    return this.head;
  }

  //get last element of linked list
  getLast() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  //
  insertAtlast(node) {
    let newNode = new Node(node);
    let lastNode = this.getLast();
    lastNode.next = newNode;
  }

  //remove first element of linked list
  removeFirst() {
    this.head = this.head.next;
  }

  //remove last element of linked list
  removeLast() {
    let node = this.head;
    while (node.next.next) {
      node = node.next;
    }
    node.next = null;
  }

  //get element at a specific position
  getElementAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter == index) {
        return node;
      }
      counter++;
      node = node.next;
    }
  }

  //traverse list
  traverse() {
    let node = this.head;
    console.log(`head->`);
    while (node) {
      console.log(`${node.data} | ->`);
      node = node.next;
    }
    console.log(`null`);
  }
}

const list = new LinkedList();

list.insertFirst(new Node(1));
list.insertFirst(new Node(2));
list.insertFirst(new Node(3));
list.traverse();
console.log(list);
console.log(list.size());
