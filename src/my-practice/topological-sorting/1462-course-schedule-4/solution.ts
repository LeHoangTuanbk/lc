export function checkIfPrerequisite(
  numCourses: number,
  prerequisites: number[][],
  queries: number[][],
): boolean[] {
  const n = numCourses;
  const graph: number[][] = Array.from({ length: n }, () => []);
  const inDegree = Array(n).fill(0);
  for (const [u, v] of prerequisites) {
    graph[u].push(v);
    inDegree[v]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  const reachableTo = Array.from({ length: n }, () => new Set<number>()); // prerequisites of i

  while (queue.length) {
    const u = queue.shift();
    for (const v of graph[u]) {
      for (const pre of reachableTo[u]) reachableTo[v].add(pre);
      reachableTo[v].add(u);
      if (--inDegree[v] === 0) queue.push(v);
    }
  }

  return queries.map(([u, v]) => reachableTo[v].has(u));
}

const numCourses = 2,
  prerequisites = [[1, 0]],
  queries = [
    [0, 1],
    [1, 0],
  ];
console.log(checkIfPrerequisite(numCourses, prerequisites, queries));
