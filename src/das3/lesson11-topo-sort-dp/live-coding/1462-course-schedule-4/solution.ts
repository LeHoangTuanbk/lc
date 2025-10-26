export function checkIfPrerequisite(
  numCourses: number,
  prerequisites: number[][],
  queries: number[][],
): boolean[] {
  const n = numCourses;
  const inDegree = Array(n).fill(0);
  const graph: number[][] = Array.from({ length: n }, () => []);
  for (const [u, v] of prerequisites) {
    graph[u].push(v);
    inDegree[v]++;
  }
  const queue: number[] = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }
  const dp = Array.from({ length: n }, () => new Set<number>());
  while (queue.length) {
    const u = queue.shift();
    for (const v of graph[u]) {
      // union
      for (const node of dp[u]) {
        dp[v].add(node);
      }
      dp[v].add(u);
      if (--inDegree[v] === 0) {
        queue.push(v);
      }
    }
  }

  return queries.map(([u, v]) => dp[v].has(u));
}

const numCourses = 2,
  prerequisites = [[1, 0]],
  queries = [
    [0, 1],
    [1, 0],
  ];
console.log(checkIfPrerequisite(numCourses, prerequisites, queries));
