export function countUnguarded(
  m: number,
  n: number,
  guards: number[][],
  walls: number[][],
): number {
  const grid = Array.from({ length: m }, () => new Uint8Array(n));

  for (const [r, c] of guards) grid[r][c] = 1;
  for (const [r, c] of walls) grid[r][c] = 2;

  //scan by row
  for (let i = 0; i < m; i++) {
    let seen = false;
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) seen = true;
      else if (grid[i][j] === 2) seen = false;
      else if (seen) grid[i][j] = 3;
    }

    seen = false;
    for (let j = n - 1; j >= 0; j--) {
      if (grid[i][j] === 1) seen = true;
      else if (grid[i][j] === 2) seen = false;
      else if (seen) grid[i][j] = 3;
    }
  }

  // scan by col
  for (let j = 0; j < n; j++) {
    let seen = false;
    for (let i = 0; i < m; i++) {
      if (grid[i][j] === 1) seen = true;
      else if (grid[i][j] === 2) seen = false;
      else if (seen) grid[i][j] = 3;
    }
    seen = false;
    for (let i = m - 1; i >= 0; i--) {
      if (grid[i][j] === 1) seen = true;
      else if (grid[i][j] === 2) seen = false;
      else if (seen) grid[i][j] = 3;
    }
  }

  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) count++;
    }
  }

  return count;
}
