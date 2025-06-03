var minimumEffortPath = function (heights) {
  // dijkstra's algorithm, calculate the minimum effort from (0, 0) to (m - 1, n - 1)
  let m = heights.length,
    n = heights[0].length;
  // definition: the minimum effort from (0, 0) to (i, j) is effortto[i][j]
  let effortTo = Array.from({ length: m }, () => Array(n).fill(Number.MAX_VALUE));
  // initialize the dp table to positive infinity
  // base case, the minimum effort from the start point to itself is 0
  effortTo[0][0] = 0;

  // priority queue, where smaller effortfromstart is prioritized
  let pq = new PriorityQueue((a, b) => a.effortFromStart - b.effortFromStart);
  // start bfs from the starting point (0, 0)

  class State {
    // a position in the matrix
    constructor(x, y, effortFromStart) {
      this.x = x;
      this.y = y;
      // the minimum effort (distance) from
      // the starting point (0, 0) to the
      this.effortFromStart = effortFromStart;
    }
  }

  // direction array, representing coordinate offsets for up, down, left, and right
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  // return the neighboring coordinates of (x, y) in up, down, left, and right directions
  function adj(matrix, x, y) {
    let m = matrix.length,
      n = matrix[0].length;
    // store neighboring nodes
    let neighbors = [];
    for (let [dx, dy] of dirs) {
      let nx = x + dx;
      let ny = y + dy;
      if (nx >= m || nx < 0 || ny >= n || ny < 0) {
        // index out of bounds
        continue;
      }
      neighbors.push([nx, ny]);
    }
    return neighbors;
  }

  pq.enqueue(new State(0, 0, 0));

  while (!pq.isEmpty()) {
    let curState = pq.dequeue();
    let curX = curState.x;
    let curY = curState.y;
    let curEffortFromStart = curState.effortFromStart;

    // end early if the destination is reached
    if (curX === m - 1 && curY === n - 1) {
      return curEffortFromStart;
    }

    if (curEffortFromStart > effortTo[curX][curY]) {
      continue;
    }
    // enqueue the neighboring coordinates of (curx, cury)
    for (let [nextX, nextY] of adj(heights, curX, curY)) {
      // calculate the effort to reach (nextx, nexty) from (curx, cury)
      let effortToNextNode = Math.max(
        effortTo[curX][curY],
        Math.abs(heights[curX][curY] - heights[nextX][nextY]),
      );
      // update the dp table
      if (effortTo[nextX][nextY] > effortToNextNode) {
        effortTo[nextX][nextY] = effortToNextNode;
        pq.enqueue(new State(nextX, nextY, effortToNextNode));
      }
    }
  }
  // normally, this return will not be reached
  return -1;
};
