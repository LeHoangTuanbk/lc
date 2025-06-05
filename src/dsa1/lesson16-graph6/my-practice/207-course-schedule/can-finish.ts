export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const n = numCourses;
  const inDegree: number[] = Array(n).fill(0);
  const graph: number[][] = Array.from({ length: n }, () => []);

  for (const e of prerequisites) {
    inDegree[e[0]]++;
    graph[e[1]].push(e[0]);
  }

  let q: number[] = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] == 0) {
      q.push(i);
    }
  }

  let idx = 0;
  while (q.length) {
    const cur = q.shift()!;
    idx++;
    for (const u of graph[cur]) {
      inDegree[u]--;
      if (inDegree[u] === 0) {
        q.push(u);
      }
    }
  }
  if (idx < n) return false;
  return true;
}
