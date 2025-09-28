export function countBlackBlocks(m: number, n: number, coordinates: number[][]): number[] {
  const totalBlocks = (m - 1) * (n - 1);
  const map = new Map<string, number>();

  for (const [x, y] of coordinates) {
    const candidates = [
      [x, y],
      [x - 1, y],
      [x, y - 1],
      [x - 1, y - 1],
    ];

    for (const [i, j] of candidates) {
      if (i >= 0 && j >= 0 && i < m - 1 && j < n - 1) {
        const key = `${i},${j}`;
        map.set(key, (map.get(key) ?? 0) + 1);
      }
    }
  }

  const res = Array(5).fill(0);
  for (const cnt of map.values()) {
    res[cnt]++;
  }

  res[0] = totalBlocks - map.size;
  return res;
}

const m = 3,
  n = 3,
  coordinates = [
    [0, 0],
    [1, 1],
    [0, 2],
  ];
console.log(countBlackBlocks(m, n, coordinates));
