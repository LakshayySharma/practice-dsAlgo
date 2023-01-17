function getPath(grid) {
  let path = [];
  findPath(grid, 0, 0, path, grid.length - 1, grid[0].length - 1);
  return path;
}

function findPath(grid, row, col, currPath, endRow, endCol) {
  if (row === endRow && col === endCol) {
    currPath.push([row, col]);
    return;
  }
  if (row <= endRow && col <= endCol) {
    if (row < endRow && !grid[row + 1][col]) {
      findPath(grid, row + 1, col, currPath.concat([row, col]), endRow, endCol);
    } else if (col < endCol && !grid[row + 1][col]) {
      findPath(grid, row, col + 1, currPath.concat([row, col]), endRow, endCol);
    }
  }
  return;
}

let testGrid = [
  [1, 1, 1, 1],
  [1, 0, 1, 0],
  [0, 1, 1, 1],
];

console.log(getPath(testGrid));
