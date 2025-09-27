export function shiftGrid(grid: number[][], k: number): number[][] {
  const m = grid.length,
    n = grid[0].length;
  k = k % (m * n);
  const gridFlat = grid.flat();
  const shiftedGridFlat = gridFlat.slice(m * n - k).concat(gridFlat.slice(0, m * n - k));
  const res: number[][] = [];

  for (let i = 0; i < m; i++) {
    res.push(shiftedGridFlat.slice(i * n, (i + 1) * n));
  }

  return res;
}

const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  k = 1;
console.log(shiftGrid(grid, k));
/* 
[1,3,4,5,6]
k = 2
[6,5,1,3,4]

*/
