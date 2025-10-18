export function loudAndRich(richer: number[][], quiet: number[]): number[] {
  const n = quiet.length;
  const graph: number[][] = Array.from({ length: n }, () => []);

  for (const [u, v] of richer) graph[v].push(u);
  const answer: number[] = new Array(n).fill(-1);

  function dfs(x: number): number {
    if (answer[x] !== -1) return answer[x];

    let quietest = x;

    for (const richerPerson of graph[x]) {
      const candidate = dfs(richerPerson);
      if (quiet[candidate] < quiet[quietest]) {
        quietest = candidate;
      }
    }

    answer[x] = quietest;
    return quietest;
  }

  for (let i = 0; i < n; i++) dfs(i);

  return answer;
}
