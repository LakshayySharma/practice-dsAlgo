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

const depthFirstSearchVisit = (u, color, adjList, callback) => {
  //   console.log(color);
  color[u] = COLORS.GREY;
  if (callback) {
    callback(u);
  }
  let neighbors = adjList.get(u).value;
  for (let i = 0; i < neighbors.length; i++) {
    if (color[neighbors[i]] === COLORS.WHITE) {
      depthFirstSearchVisit(neighbors[i], color, adjList, callback);
    }
  }
  color[u] = COLORS.BLACK;
};

const depthFirstSearch = (graph, callback) => {
  debugger;
  let vertices = graph.getVertices();
  let adjList = graph.getAdjList();
  let color = initializeColor(vertices);

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === COLORS.WHITE) {
      depthFirstSearchVisit(vertices[i], color, adjList, callback);
    }
  }
};

module.exports = { depthFirstSearch };
