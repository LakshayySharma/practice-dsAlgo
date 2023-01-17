const LinkedList = require("./LinkedList");

let list = new LinkedList();

function insertNodes(list, arr) {
  for (let i = 0; i < arr.length; i++) {
    list.insertLast(arr[i]);
  }
}
let arr = [3, 5, 8, 5, 10, 2, 1];

insertNodes(list, arr);
// list.printList();

//Q1 - remove duplicates
function removeDuplicates(list, head = list.head) {
  debugger;
  let hTable = {};
  let temp = head;
  let prev = null;
  while (temp) {
    if (hTable.hasOwnProperty(temp.data)) {
      //   temp.next = temp.next.next;
      prev.next = temp.next;
    } else {
      hTable[temp.data] = 1;
      prev = temp;
    }
    temp = temp.next;
  }
  list.printList();
  //   console.log(prev);
  //   return prev;
}

//return kth to last element in LinkedList
function kthToLast(n, list, head = list.head) {
  let temp = head;
  let length = 0;
  let counter = head;
  while (counter) {
    length++;
    counter = counter.next;
  }
  for (let i = 0; i < length - n; i++) {
    temp = temp.next;
  }
  console.log(temp.data);
}

//partition problem
function partition(head, val) {
  let node = head;
  let beforeStart = null;
  let afterStart = null;
  let beforeEnd = null;
  let afterEnd = null;
  debugger;
  while (node != null) {
    let next = node.next;
    node.next = null;
    if (node.data < val) {
      if (beforeStart == null) {
        beforeStart = node;
        beforeEnd = beforeStart;
      } else {
        beforeEnd.next = node;
        beforeEnd = node;
      }
    } else {
      if (afterEnd == null) {
        afterStart = node;
        afterEnd = afterStart;
      } else {
        afterEnd.next = node;
        afterEnd = node;
      }
    }
    node = next;
  }

  if (beforeStart == null) {
    return afterStart;
  }

  beforeEnd.next = afterStart;
  return beforeStart;
}

// partition(list.head, 5);
// list.printList();

function partition2(head, val) {
  let temp = head;
  let leftList = null;
  let leftStart = null;
  let rightList = null;
  let rightStart = null;
  debugger;
  while (temp != null) {
    if (temp.data < val) {
      if (leftList == null) {
        leftList = temp;
        leftStart = leftList;
        temp = temp.next;
        leftList.next = null;
      } else {
        leftList.next = temp;
        leftList = leftList.next;
        temp = temp.next;
        leftList.next = null;
      }
    } else {
      if (rightList == null) {
        rightList = temp;
        rightStart = rightList;
        temp = temp.next;
        rightList.next = null;
      } else {
        rightList.next = temp;
        rightList = rightList.next;
        temp = temp.next;
        rightList.next = null;
      }
    }
  }

  if (rightStart == null) {
    return leftStart;
  } else if (leftStart == null) {
    return rightStart;
  }
  leftList.next = rightStart;
  return head;
}

// partition2(list.head, 9);
// list.printList();

let list2 = new LinkedList();
insertNodes(list2, [9, 7, 8]);
let list3 = new LinkedList();
insertNodes(list3, [6, 8, 5]);

function returnNum(list) {
  let temp = list.head;
  let arr = [];
  while (temp != null) {
    arr.unshift(temp.data);
    temp = temp.next;
  }
  return parseInt(arr.join(""));
}

function sumList(list1, list2) {
  let sum = returnNum(list1) + returnNum(list2);
  let list = new LinkedList();
  let arr = sum.toString().split("");
  insertNodes(list, arr);
  list.printList();
}

// sumList(list2, list3);

list.printList();

// let temp = list.head;
// let prev = list.head;
// while (temp.next != null && prev != null && prev.next != null) {
//   temp = temp.next;
//   prev = prev.next.next;
// }

// prev.next = temp;

// function checkCycle(list) {
//   let slow = list.head;
//   let fast = list.head;
//   while (fast != null && fast.next != null) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow == fast) {
//       console.log("cycle found");
//       break;
//     }
//   }

//   if (fast == null || fast.next == null) {
//     console.log("cycle not found");
//   }

//   slow = list.head;
//   while (slow != fast) {
//     slow = slow.next;
//     fast = fast.next;
//   }
//   console.log(fast);
//   debugger;
//   return fast;
// }

// checkCycle(list);
//-------------------------------------------------------------

//reverse a linked list
function reverse(list) {
  debugger;
  let temp = list.head;
  let prev = null;
  let curr = list.head;
  while (temp != null) {
    temp = temp.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  list.head = prev;
  return list.head;
}

reverse(list);
list.printList();
