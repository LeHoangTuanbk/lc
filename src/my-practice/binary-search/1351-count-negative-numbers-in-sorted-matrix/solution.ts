/* 
Solution 1: O(n * m)
Solution 2: O(n log m)
Solution 3: O(n + m)

*/

// O(m + n)
export function countNegatives(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  let row = 0,
    col = n - 1;
  let count = 0;

  while (row < m && col >= 0) {
    if (grid[row][col] < 0) {
      count += m - row;
      col--;
    } else {
      row++;
    }
  }
  return count;
}

const grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];

console.log(countNegatives(grid));
