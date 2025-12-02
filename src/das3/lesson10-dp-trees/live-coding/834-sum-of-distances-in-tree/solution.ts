export function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
  const nm = 30002;
  const adj: number[][] = Array.from({ length: nm }, () => []);
  const sumIn = Array(nm).fill(0),
    sumOut = Array(nm).fill(0),
    count = Array(nm).fill(0);

  function dfs(i: number, p: number) {
    for (const j of adj[i]) {
      if (j != p) {
        dfs(j, i);
        sumIn[i] += sumIn[j] + count[j];
        count[i] += count[j];
      }
    }
  }

  function dfs2(i: number, p: number) {
    for (const j of adj[i]) {
      if (j !== p) {
        sumOut[j] = sumOut[i] + sumIn[i] - sumIn[j] - count[j] + (n - count[j]);
        dfs2(j, i);
      }
    }
  }

  for (const e of edges) {
    adj[e[0]].push(e[1]);
    adj[e[1]].push(e[0]);
  }
  dfs(0, -1);
  dfs2(0, -1);

  let res: number[] = [];
  for (let i = 0; i < n; i++) {
    res.push(sumIn[i] + sumOut[i]);
  }
  return res;
}
