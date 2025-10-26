export function minimumTime(n: number, relations: number[][], time: number[]): number {
  n++;
  const inDegree = Array(n).fill(0);
  const graph: number[][] = Array.from({ length: n }, () => []);
  for (const [u, v] of relations) {
    graph[u].push(v);
    inDegree[v]++;
  }

  const queue: number[] = [];
  for (let i = 1; i < n; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  const dp = Array(n).fill(0);

  while (queue.length) {
    const u = queue.shift();

    for (const v of graph[u]) {
      if (--inDegree[v] == 0) {
        queue.push(v);
      }
      dp[v] = Math.max(dp[v], dp[u] + time[u - 1]);
    }
  }

  let totalTime = 0;
  for (let i = 1; i < n; i++) {
    totalTime = Math.max(totalTime, dp[i] + time[i - 1]);
  }

  return totalTime;
}

const n = 3,
  relations = [
    [1, 3],
    [2, 3],
  ],
  time = [3, 2, 5];
console.log(minimumTime(n, relations, time));
