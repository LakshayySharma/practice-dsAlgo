//custom array----------------------
class CustomArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this.length;
  }
  pop() {
    let value = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return value;
  }
}

const arr1 = new CustomArray();
console.log(arr1);
arr1.push(1);
console.log(arr1);
const arr2 = new CustomArray();
console.log(arr2);
arr1.push("hello");
console.log(arr1);
