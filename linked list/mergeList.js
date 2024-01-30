function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

var mergeTwoLists = function (list1, list2) {
  let newList = new ListNode();
  let head = newList;
  mergeListUtil(list1, list2, newList);
  console.log(head);
};

function mergeListUtil(l1, l2, resList) {
  if (l1 == null) {
    resList.next = l2;
    return;
  }
  if (l2 == null) {
    resList.next = l1;
    return;
  }

  if (l1.val > l2.val) {
    resList.next = new ListNode(l2.val);
    mergeListUtil(l1, l2.next, resList.next);
  } else if (l2.val > l1.val) {
    resList.next = new ListNode(l1.val);
    mergeListUtil(l1.next, l2, resList.next);
  } else if (l1.val == l2.val) {
    resList.next = new ListNode(l1.val, new ListNode(l2.val));
    mergeListUtil(l1.next, l2.next, resList.next.next);
  }
  return;
}

mergeTwoLists(l1, l2);
