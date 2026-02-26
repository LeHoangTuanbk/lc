export function minimumVisitedCells(grid: number[][]): number {
  const m = grid.length,
    n = grid[0].length;

  const visited = Array.from({ length: m }, () => Array(n).fill(false));

  const queue: [number, number, number][] = [[0, 0, 1]]; //[i,j,shift]
  visited[0][0] = true;

  while (queue.length) {
    const [i, j, dist] = queue.shift();

    if (i === m - 1 && j === n - 1) return dist;

    // right
    for (let k = j + 1; k <= Math.min(n - 1, j + grid[i][j]); k++) {
      if (!visited[i][k]) {
        visited[i][k] = true;
        queue.push([i, k, dist + 1]);
      }
    }

    // down
    for (let k = i + 1; k <= Math.min(m - 1, i + grid[i][j]); k++) {
      if (!visited[k][j]) {
        visited[k][j] = true;
        queue.push([k, j, dist + 1]);
      }
    }
  }

  return -1;
}

const grid = [
  [3, 4, 2, 1],
  [4, 2, 3, 1],
  [2, 1, 0, 0],
  [2, 4, 0, 0],
];
console.log(minimumVisitedCells(grid)); // 4
/* 
m == grid.length
n == grid[i].length
1 <= m, n <= 10^5
1 <= m * n <= 10^5
0 <= grid[i][j] < m * n
grid[m - 1][n - 1] == 0

*/
