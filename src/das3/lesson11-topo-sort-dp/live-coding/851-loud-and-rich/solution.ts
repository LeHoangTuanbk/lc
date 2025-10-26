export function loudAndRich(richer: number[][], quiet: number[]): number[] {
  const n = quiet.length;
  const inDegree = Array(n).fill(0);
  const graph: number[][] = Array.from({ length: n }, () => []);
  const dp = Array.from({ length: n }, (_, i) => i);
  for (const [u, v] of richer) {
    graph[u].push(v);
    inDegree[v]++;
  }
  const queue: number[] = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  function getLeastQuiet(x: number, y: number): number {
    if (quiet[x] > quiet[y]) {
      return y;
    }
    return x;
  }

  while (queue.length) {
    const u = queue.shift();
    for (const v of graph[u]) {
      if (--inDegree[v] == 0) {
        queue.push(v);
      }
      dp[v] = getLeastQuiet(dp[v], dp[u]);
    }
  }

  return dp;
}

const richer = [
    [1, 0],
    [2, 1],
    [3, 1],
    [3, 7],
    [4, 3],
    [5, 3],
    [6, 3],
  ],
  quiet = [3, 2, 5, 4, 6, 1, 7, 0];
console.log(loudAndRich(richer, quiet));
