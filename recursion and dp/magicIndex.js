let arr = [1, 2, 3, 4, 6, 5];

// function magicIndex(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === i) {
//       return i;
//     }
//   }
// }

function magicIndex2(arr) {
  return magicIndexUtil(arr, 0, arr.length - 1);
}

function magicIndexUtil(arr, start, end) {
  if (end < start) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] == mid) {
    return mid;
  } else if (arr[mid] > mid) {
    return magicIndexUtil(arr, start, mid - 1);
  } else {
    return magicIndexUtil(arr, mid + 1, end);
  }
}

console.log(magicIndex2([-40, 1, 3, 5, 8, 10, 12]));
