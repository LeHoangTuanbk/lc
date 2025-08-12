export function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
  const adjMatrix = Array.from({ length: n }, () => Array(n).fill(Infinity));
  for (let [u, v, w] of edges) {
    adjMatrix[u][v] = w;
    adjMatrix[v][u] = w;
  }

  const dist = adjMatrix.map((r) => [...r]);
  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      if (dist[i][k] === Infinity) continue;
      for (let j = 0; j < n; j++) {
        if (dist[k][j] === Infinity) continue;
        const nd = dist[i][k] + dist[k][j];
        if (nd < dist[i][j]) {
          dist[i][j] = nd;
        }
      }
    }
  }

  let bestCity = 0,
    bestCityCount = n + 1;
  for (let i = 0; i < n; i++) {
    const iCount = dist[i].filter((d) => d <= distanceThreshold).length;
    if (iCount <= bestCityCount) {
      bestCity = i;
      bestCityCount = iCount;
    }
  }

  return bestCity;
}

const n = 5,
  edges = [
    [0, 1, 2],
    [0, 4, 8],
    [1, 2, 10000],
    [1, 4, 2],
    [2, 3, 10000],
    [3, 4, 1],
  ],
  distanceThreshold = 10000;
console.log(findTheCity(n, edges, distanceThreshold));
