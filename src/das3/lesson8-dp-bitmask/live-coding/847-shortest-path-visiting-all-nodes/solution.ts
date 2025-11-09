export function shortestPathLength(graph: number[][]): number {
  const n = graph.length;
  const d = Array.from({ length: n }, () => Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) {
    d[i][i] = 0;
    for (const j of graph[i]) {
      d[i][j] = 1;
      d[j][i] = 1;
    }
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        d[i][j] = Math.min(d[i][j], d[i][k] + d[k][j]);
      }
    }
  }

  const dp: number[][] = Array.from({ length: 1 << n }, () => Array(n).fill(Infinity));
  for (let i = 0; i < n; i++) {
    dp[1 << i][i] = 0;
  }

  for (let mask = 1; mask < 1 << n; mask++) {
    for (let i = 0; i < n; i++) {
      if ((mask & (1 << i)) === 0) continue;
      for (let j = 0; j < n; j++) {
        if ((mask & (1 << j)) !== 0) continue;
        const mask2 = mask | (1 << j);
        dp[mask2][j] = Math.min(dp[mask2][j], dp[mask][i] + d[i][j]);
      }
    }
  }

  let res = Infinity;
  for (let i = 0; i < n; i++) {
    res = Math.min(res, dp[(1 << n) - 1][i]);
  }

  return res;
}

const graph = [[1, 2, 3], [0], [0], [0]];
console.log(shortestPathLength(graph));
/* 
Cách bitmask  này có gì tốt hơn dùng backtrack
*/
