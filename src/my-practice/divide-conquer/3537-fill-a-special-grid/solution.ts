export function specialGrid(n: number): number[][] {
  const size = 1 << n;
  const grid: number[][] = Array(size)
    .fill(0)
    .map(() => Array(size).fill(0));

  function fill(x: number, y: number, size: number, start: number): void {
    if (size === 1) {
      grid[x][y] = start;
      return;
    }
    const half = size / 2;
    const quarterSize = half * half;
    fill(x, y + half, half, start);
    fill(x + half, y + half, half, start + quarterSize);
    fill(x + half, y, half, start + 2 * quarterSize);
    fill(x, y, half, start + 3 * quarterSize);
  }

  fill(0, 0, size, 0);
  return grid;
}
