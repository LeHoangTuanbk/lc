function distance(a: number[], b: number[]) {
  return (a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]);
}

export function numberOfBoomerangs(points: number[][]): number {
  const n = points.length;
  let count = 0;
  for (let i = 0; i < points.length; i++) {
    const map = new Map<number, number>();

    for (let j = 0; j < points.length; j++) {
      if (j === i) continue;

      const d = distance(points[i], points[j]);
      map.set(d, (map.get(d) ?? 0) + 1);
    }

    for (const m of map.values()) {
      count += m * (m - 1);
    }
  }
  return count;
}

const points = [
  [0, 0],
  [1, 0],
  [2, 0],
];

console.log(numberOfBoomerangs(points));
