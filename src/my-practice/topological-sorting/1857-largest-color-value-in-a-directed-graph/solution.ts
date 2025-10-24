export function largestPathValue(colors: string, edges: number[][]): number {
  const n = colors.length;
  const graph: number[][] = Array.from({ length: n }, () => []);
  const inDegree = Array(n).fill(0);

  for (const [u, v] of edges) {
    graph[u].push(v);
    inDegree[v]++;
  }

  const dp = Array.from({ length: n }, () => Array(26).fill(0));
  const queue: number[] = [];

  for (let i = 0; i < n; i++) {
    if (inDegree[i] == 0) {
      queue.push(i);
      dp[i][colors.charCodeAt(i) - 97] = 1;
    }
  }

  let seen = 0,
    res = 0;

  while (queue.length) {
    const u = queue.shift();
    seen++;
    for (const v of graph[u]) {
      for (let c = 0; c < 26; c++) {
        const added = colors.charCodeAt(v) - 97 === c ? 1 : 0;
        dp[v][c] = Math.max(dp[v][c], dp[u][c] + added);
      }
      if (--inDegree[v] === 0) {
        queue.push(v);
      }
    }
    res = Math.max(res, Math.max(...dp[u]));
  }

  return seen === n ? res : -1;
}

const colors = 'abaca',
  edges = [
    [0, 1],
    [0, 2],
    [2, 3],
    [3, 4],
  ];
console.log(largestPathValue(colors, edges));
