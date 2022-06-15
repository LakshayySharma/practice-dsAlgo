/*
==================================================================================
                                 Sorting Algorithms                               
===================================================================================

*/
//=========================================  Bubble Sort  =======================================
// Worst case --> O(n^2)

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
//--------------------------------------------------------------------------------------------------------------------

//========================================= Selection Sort ===========================================
//Worst case --> O(n^2)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

console.log(selectionSort([3, 1, 5, 11, 2]));
// ---------------------------------------------------------------------------------------------------------

// ======================================== Insertion Sort =============================================
function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i - 1]) {
        //find where number should go
        for (var j = 1; j < i; j++) {
          if (array[i] >= array[j - 1] && array[i] < array[j]) {
            //move number to the right spot
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }
}
console.log(insertionSort([11, 2, 4, 7, 3, 5]));

// ----------------------------------------------------------------------------------------------------------------------

// ============================================= Merge Sort =======================================================================
//[12, 1, 5, 8, 2, 3, 4, 6, 20, 17]
// worst case = O(nlogn)
function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  }
  const length = arr.length;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
console.log(mergeSort([12, 1, 5, 8, 2, 3, 4, 6, 20, 17]));
// ---------------------------------------------------------------------------------------

// ==================================== Quick Sort ============================================
function quickSort(arr, start = 0, end = arr.length - 1) {
  debugger;
  if (start >= end) {
    return;
  }
  let index = partition(arr, start, end);
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
  return arr;
}
function partition(arr, start, end) {
  debugger;
  let pivot = arr[end];
  let index = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
    }
  }
  [arr[index], arr[end]] = [arr[end], arr[index]];
  return index;
}
console.log(quickSort([3, 1, 9, 5, 7, 2]));
