export function shortestPathLength(graph: number[][]): number {
  const n = graph.length;
  const d = Array.from({ length: n }, () => Array(n).fill(Infinity));
  const next: number[][] = Array.from({ length: n }, () => Array(n).fill(-1));

  for (let i = 0; i < n; i++) {
    d[i][i] = 0;
    for (const j of graph[i]) {
      d[i][j] = 1;
      d[j][i] = 1;
      next[i][j] = j;
      next[j][i] = i;
    }
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const canD = d[i][k] + d[k][j];
        if (d[i][j] > canD) {
          d[i][j] = canD;
          next[i][j] = next[i][k];
        }
      }
    }
  }

  const dp: number[][] = Array.from({ length: 1 << n }, () => Array(n).fill(Infinity));
  const trace: number[][][] = Array.from({ length: 1 << n }, () =>
    Array.from({ length: n }, () => null),
  );

  for (let i = 0; i < n; i++) {
    dp[1 << i][i] = 0;
  }

  for (let mask = 1; mask < 1 << n; mask++) {
    for (let i = 0; i < n; i++) {
      if ((mask & (1 << i)) === 0) continue;
      for (let j = 0; j < n; j++) {
        if ((mask & (1 << j)) !== 0) continue;
        const mask2 = mask | (1 << j);
        const newD = dp[mask][i] + d[i][j];
        if (dp[mask2][j] > newD) {
          dp[mask2][j] = newD;
          trace[mask2][j] = [mask, i];
        }
      }
    }
  }

  let res = Infinity;
  let endNode = -1;
  const full = (1 << n) - 1;
  for (let i = 0; i < n; i++) {
    if (dp[full][i] < res) {
      res = dp[full][i];
      endNode = i;
    }
  }

  const path: number[] = [endNode];
  let currentMask = full;
  let currentNode = endNode;

  while (trace[currentMask][currentNode]) {
    const [prevMask, preNode] = trace[currentMask][currentNode];
    const pathBetween = reconstructPath(preNode, currentNode, next);
    for (let t = pathBetween.length - 2; t >= 0; --t) path.push(pathBetween[t]);
    currentMask = prevMask;
    currentNode = preNode;
  }
  console.log('Path:', path.reverse());

  return res;
}

function reconstructPath(u: number, v: number, next: number[][]): number[] {
  if (next[u][v] === -1) return [];
  const path = [u];
  while (u !== v) {
    u = next[u][v];
    path.push(u);
  }
  return path;
}

const graph = [[1, 2, 3], [0], [0], [0]];
console.log(shortestPathLength(graph));

/* 
Cách bitmask  này có gì tốt hơn dùng backtrack
+ backtrack: n! => chay duoc co 10
+ dp: 2^n * n^2 => chay duoc co 20
*/
