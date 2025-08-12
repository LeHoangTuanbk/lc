const INF = Infinity;

export function floydWarshall(adjMatrix: number[][]) {
  const n = adjMatrix.length;
  const dist = adjMatrix.map((r) => [...r]);
  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      if (dist[i][k] === INF) continue;
      for (let j = 0; j < n; j++) {
        const nd = dist[i][k] + dist[k][j];
        if (nd < dist[i][j]) {
          dist[i][j] = nd;
        }
      }
    }
  }

  return dist;
}

const matrix = [
  [0, 3, 10, INF],
  [INF, 0, 1, 100],
  [INF, INF, 0, 2],
  [INF, INF, INF, 0],
];

const d = floydWarshall(matrix);
console.log(d);
