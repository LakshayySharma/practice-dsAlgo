//Implement algorithm to determine if string has all unique characters
function uniqueChar(str) {
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      return false;
    } else {
      hash[str[i]] = true;
    }
  }
  return true;
}

//584  1559  1797

//check if a string is permutation of the other given string
function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let hash1 = new Array(128).fill(0);
  for (let i = 0; i < str1.length; i++) {
    hash1[str1.charCodeAt()] = 1;
  }
  for (let i = 0; i < str2.length; i++) {
    if (!hash1[str1.charCodeAt()]) {
      return false;
    }
  }
  return true;
}
