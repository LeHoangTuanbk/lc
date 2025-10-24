export function minimumTime(n: number, relations: number[][], time: number[]): number {
  const graph: number[][] = Array.from({ length: n + 1 }, () => []);
  const inDegree: number[] = Array(n + 1).fill(0);

  for (const [u, v] of relations) {
    graph[u].push(v);
    inDegree[v]++;
  }

  const dp: number[] = [0, ...time];
  const queue: number[] = [];
  for (let i = 1; i <= n; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const u = queue.shift();
    for (const v of graph[u]) {
      dp[v] = Math.max(dp[v], dp[u] + time[v - 1]);
      if (--inDegree[v] === 0) queue.push(v);
    }
  }

  return Math.max(...dp);
}

const n = 2,
  relations = [[2, 1]],
  time = [10000, 10000];
console.log(minimumTime(n, relations, time));
