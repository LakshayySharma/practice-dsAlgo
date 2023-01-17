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
const findRoute = (graph, startVertex, endVertex, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = [];
  queue.push(startVertex);

  while (queue.length != 0) {
    const u = queue.shift();
    const neighbors = adjList.get(u).value;
    for (let i = 0; i < neighbors.length; i++) {
      if (neighbors[i] == endVertex) {
        return true;
      }
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
  return false;
};

module.exports = { findRoute };
