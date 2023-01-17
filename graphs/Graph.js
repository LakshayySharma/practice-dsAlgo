const { Dictionary } = require("../Dictionary");
const { breadthFirst, improvedBFS } = require("./BFS");
const { depthFirstSearch } = require("./DFS");
const { findRoute } = require("./findRoute");

class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  addVertex(vertex) {
    if (!this.vertices.includes(vertex)) {
      this.vertices.push(vertex);
      this.adjList.set(vertex, []);
    }
  }

  addEdge(v, w) {
    if (!this.adjList.get(v)) {
      this.vertices.push(v);
    }
    if (!this.adjList.get(w)) {
      this.vertices.push(w);
    }
    this.adjList.get(v).value.push(w);
    if (!this.isDirected) {
      this.adjList.get(w).value.push(v);
    }
  }

  getVertices() {
    return this.vertices;
  }

  getAdjList() {
    return this.adjList;
  }

  toString() {
    let s = "";
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `;
      const neighbors = this.adjList.get(this.vertices[i]).value;

      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]} `;
      }
      s += "\n";
    }
    return s;
  }
}

let graph1 = new Graph(true);

graph1.addVertex("1");
graph1.addVertex("2");
graph1.addVertex("3");
graph1.addVertex("4");
graph1.addVertex("5");
graph1.addVertex("6");
graph1.addEdge("1", "2");
graph1.addEdge("1", "3");
graph1.addEdge("2", "4");
graph1.addEdge("2", "5");
graph1.addEdge("4", "6");
graph1.addEdge("5", "6");

console.log(graph1.toString());
const printVertex = (vertex) => console.log(`visited vertex - ${vertex}`);
let shortestPathA = improvedBFS(graph1, "1", printVertex);
let myVertices = graph1.getVertices();

const fromVertex = myVertices[0]; // {9}
// for (i = 1; i < myVertices.length; i++) {
//   // {10}
//   const toVertex = myVertices[i]; // {11}
//   const path = []; // {12}
//   for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
//     // {13}
//     path.push(v); // {14}
//   }
//   path.push(fromVertex); // {15}
//   let s = path.pop(); // {16}
//   while (path.length != 0) {
//     // {17}
//     s += " - " + path.pop(); // {18}
//   }
//   console.log(s); // {19}
// }

// depthFirstSearch(graph1, printVertex);

console.log(findRoute(graph1, "1", "3"));
breadthFirst(graph1, console.log);
