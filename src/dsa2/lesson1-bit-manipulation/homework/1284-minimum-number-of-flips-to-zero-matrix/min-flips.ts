export function minFlips(mat: number[][]): number {
  const m = mat.length;
  const n = mat[0].length;

  const start = matToBitmask(mat);
  if (start === 0) return 0;

  const seen = new Set<number>();
  const queue: [number, number][] = [[start, 0]];
  seen.add(start);

  while (queue.length > 0) {
    const [state, steps] = queue.shift();
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        const next = flip(state, i, j, m, n);
        if (next === 0) return steps + 1;
        if (!seen.has(next)) {
          seen.add(next);
          queue.push([next, steps + 1]);
        }
      }
    }
  }

  return -1;
}

// Use bitmask to represent the matrix: bitmask size m *n bits
function matToBitmask(mat: number[][]): number {
  const m = mat.length;
  const n = mat[0].length;
  let mask = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        const bit = i * n + j;
        mask |= 1 << bit;
      }
    }
  }

  return mask;
}

function flip(state: number, i: number, j: number, m: number, n: number): number {
  const dirs = [
    [0, 0],
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (const [dx, dy] of dirs) {
    const ni = i + dx;
    const nj = j + dy;
    if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
      const bit = ni * n + nj;
      state ^= 1 << bit; // flip the neighbors: 1 -> 0, 0 -> 1;
    }
  }

  return state;
}

const mat = [
  [0, 0],
  [0, 1],
];
console.log(minFlips(mat));

// const mat2 = [
//   [1, 0, 0],
//   [1, 0, 0],
// ];

// console.log(matToBitmask(mat2));

/* 
Input: mat = [[0,0],[0,1]]
Output: 3
Explanation: One possible solution is to flip (1, 0) then (0, 1) and finally (1, 1) as shown.
Example 2:

Input: mat = [[0]]
Output: 0
Explanation: Given matrix is a zero matrix. We do not need to change it.
Example 3:

Input: mat = [[1,0,0],[1,0,0]]
Output: -1
Explanation: Given matrix cannot be a zero matrix.

*/
