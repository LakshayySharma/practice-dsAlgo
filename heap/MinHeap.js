class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    if (index == 0) {
      return undefined;
    }
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  insert(value) {
    if (value !== null) {
      this.heap.push(value);
      this.shift(this.heap.length - 1);
      return true;
    }
    return false;
  }

  shift(index) {
    let parentIndex = this.getParentIndex(index);
    while (index > 0 && this.heap[parentIndex] > this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }

  findMin() {
    return this.isEmpty() ? undefined : this.heap[0];
  }

  extract() {
    debugger;
    if (this.isEmpty()) {
      return undefined; // {1}
    }
    if (this.size() === 1) {
      return this.heap.shift(); // {2}
    }
    const removedValue = this.heap.shift(); // {3}
    this.heap.unshift(this.heap.pop());
    this.shiftDown(0); // {4}
    return removedValue; // {5}
  }

  shiftDown(index) {
    debugger;
    let element = index;
    const left = this.getLeftChildIndex(index); // {1}
    const right = this.getRightChildIndex(index); // {2}
    const size = this.size();
    if (left < size && this.heap[element] > this.heap[left]) {
      // {3}
      element = left; // {4}
    }
    if (right < size && this.heap[element] > this.heap[right]) {
      // {5}
      element = right; // {6}
    }
    if (index !== element) {
      // {7}
      [this.heap[index], this.heap[element]] = [
        this.heap[element],
        this.heap[index],
      ]; // {8}

      this.shiftDown(element); // {9}
    }
  }
}

module.exports = { MinHeap };
