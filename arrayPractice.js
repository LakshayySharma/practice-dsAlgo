//---------------------------------------------------------------- Q 1--------------------------

//Two sum - Array ques.

// <sol 1 - Brute force >
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
  return null;
}

// <sol 2 - using hash map>
function optTowSum(arr, target) {
  let solHash = {};

  for (let i = 0; i < arr.length; i++) {
    if (solHash[arr[i]] !== undefined) {
      console.log(solHash);
      return [solHash[arr[i]], i];
    }
    solHash[target - arr[i]] = i;
    // console.log(solHash.hasOwnProperty(noToFind));
  }
  console.log(solHash);
  return null;
}

console.log(optTowSum([1, 2, 4, 3, 5, 7], 11));

//
