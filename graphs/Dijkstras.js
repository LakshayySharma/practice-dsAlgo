let graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 2, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0],
];

console.log(graph);

const INF = Number.MAX_SAFE_INTEGER;
const dijkstra = (graph, src) => {
  debugger;
  const dist = [];
  const visited = [];
  const { length } = graph;
  for (let i = 0; i < length; i++) {
    // {1}
    dist[i] = INF;
    visited[i] = false;
  }
  dist[src] = 0; // {2}
  for (let i = 0; i < length - 1; i++) {
    // {3}
    const u = minDistance(dist, visited); // {4}
    visited[u] = true; // {5}
    for (let v = 0; v < length; v++) {
      if (
        !visited[v] &&
        graph[u][v] !== 0 &&
        dist[u] !== INF &&
        dist[u] + graph[u][v] < dist[v]
      ) {
        // {6}
        dist[v] = dist[u] + graph[u][v]; // {7}
      }
    }
  }
  return dist; // {8}
};

const minDistance = (dist, visited) => {
  debugger;
  let min = INF;
  let minIndex = -1;
  for (let v = 0; v < dist.length; v++) {
    if (visited[v] === false && dist[v] <= min) {
      min = dist[v];
      minIndex = v;
    }
  }
  return minIndex;
};

let distance = dijkstra(graph, 0);
console.log(distance);
