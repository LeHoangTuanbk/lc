function distance(a: number[], b: number[]) {
  return (a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]);
}

function numberOfBoomerangs(points: number[][]): number {
  const n = points.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j == i) continue;
      for (let k = 0; k < n; k++) {
        if (k === i || k === j) continue;
        if (distance(points[i], points[j]) === distance(points[i], points[k])) {
          count++;
        }
      }
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
