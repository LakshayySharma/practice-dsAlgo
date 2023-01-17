const COLORS = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2,
};

const initializeColor = (vertices) => {
  let color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = COLORS.WHITE;
  }
  return color;
};

const breadthFirst = (graph, startVertex, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = [];
  queue.push(startVertex);

  while (queue.length != 0) {
    const u = queue.shift();
    const neighbors = adjList.get(u).value;
    for (let i = 0; i < neighbors.length; i++) {
      if (color[neighbors[i]] == COLORS.WHITE) {
        queue.push(neighbors[i]);
        color[neighbors[i]] = COLORS.GREY;
      }
    }
    color[u] = COLORS.BLACK;
    if (callback) {
      callback(u);
    }
  }
};

const improvedBFS = (graph, startVertex) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = [];
  const distances = {};
  const predecessors = {};
  queue.push(startVertex);
  for (let i = 0; i < vertices.length; i++) {
    distances[vertices[i]] = 0;
    predecessors[vertices[i]] = null;
  }
  while (queue.length != 0) {
    const u = queue.shift();
    const neighbors = adjList.get(u).value;
    color[u] = COLORS.GREY;
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === COLORS.WHITE) {
        color[w] = COLORS.GREY;
        distances[w] = distances[u] + 1;
        predecessors[w] = u;
        queue.push(w);
      }
    }
    color[u] = COLORS.BLACK;
  }

  return {
    distances,
    predecessors,
  };
};

module.exports = { breadthFirst, improvedBFS };
