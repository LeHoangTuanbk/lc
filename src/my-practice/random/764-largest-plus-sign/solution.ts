export function orderOfLargestPlusSign(n: number, mines: number[][]): number {
  const grid: number[][] = Array.from({ length: n }, () => Array(n).fill(1));

  for (const [x, y] of mines) {
    grid[x][y] = 0;
  }

  const up = Array.from({ length: n }, () => Array(n).fill(0));
  const down = Array.from({ length: n }, () => Array(n).fill(0));
  const left = Array.from({ length: n }, () => Array(n).fill(0));
  const right = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        up[i][j] = (i > 0 ? up[i - 1][j] : 0) + 1;
        left[i][j] = (j > 0 ? left[i][j - 1] : 0) + 1;
      }
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (grid[i][j] === 1) {
        down[i][j] = 1 + (i < n - 1 ? down[i + 1][j] : 0);
        right[i][j] = 1 + (j < n - 1 ? right[i][j + 1] : 0);
      }
    }
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const order = Math.min(up[i][j], down[i][j], left[i][j], right[i][j]);
      ans = Math.max(ans, order);
    }
  }

  return ans;
}

const n = 5,
  mines = [[4, 2]];
console.log(orderOfLargestPlusSign(n, mines));
