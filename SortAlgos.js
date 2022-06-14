//--------------------- Bubble Sort --------------------
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

arr1 = [14, 2, 11, 7, 5];
console.log(arr1);
console.log(bubbleSort(arr1));

//
