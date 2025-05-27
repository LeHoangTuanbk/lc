const dirs = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

export function pacificAtlantic(heights: number[][]): number[][] {
  const m = heights.length;
  const n = heights[0].length;
  const pacificVisited = Array.from({ length: m }, () => Array.from({ length: n }, () => false));
  const atlanticVisited = Array.from({ length: m }, () => Array.from({ length: n }, () => false));

  const pacificQueue: number[][] = [];
  const atlanticQueue: number[][] = [];
  for (let i = 0; i < n; i++) {
    pacificQueue.push([0, i]);
    pacificVisited[0][i] = true;

    atlanticQueue.push([m - 1, i]);
    atlanticVisited[m - 1][i] = true;
  }

  for (let i = 0; i < m; i++) {
    pacificQueue.push([i, 0]);
    pacificVisited[i][0] = true;

    atlanticQueue.push([i, n - 1]);
    atlanticVisited[i][n - 1] = true;
  }

  function bfs(queue: number[][], visited: boolean[][]) {
    while (queue.length) {
      const [i, j] = queue.shift()!;
      for (const [dx, dy] of dirs) {
        const i2 = i + dx;
        const j2 = j + dy;
        if (
          i2 >= 0 &&
          j2 >= 0 &&
          i2 < m &&
          j2 < n &&
          !visited[i2][j2] &&
          heights[i2][j2] >= heights[i][j]
        ) {
          queue.push([i2, j2]);
          visited[i2][j2] = true;
        }
      }
    }
  }

  bfs(pacificQueue, pacificVisited);
  bfs(atlanticQueue, atlanticVisited);

  const res: number[][] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (atlanticVisited[i][j] && pacificVisited[i][j]) {
        res.push([i, j]);
      }
    }
  }

  return res;
}
