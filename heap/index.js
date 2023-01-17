const { MinHeap } = require("./MinHeap");
const { MaxHeap } = require("./MaxHeap");

let minHeap = new MinHeap();
minHeap.insert(2);
minHeap.insert(6);
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);
minHeap.insert(9);
console.log(minHeap);
console.log(minHeap.size());
console.log(minHeap.isEmpty());
console.log(minHeap.findMin());
minHeap.extract();
console.log(minHeap);

let maxHeap = new MaxHeap();
maxHeap.insert(2);
maxHeap.insert(6);
maxHeap.insert(5);
maxHeap.insert(3);
maxHeap.insert(8);
maxHeap.insert(9);
maxHeap.extract();
console.log(maxHeap);
