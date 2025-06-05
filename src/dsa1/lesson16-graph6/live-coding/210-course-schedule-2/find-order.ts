function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const n = numCourses;
  const inDegree: number[] = Array(n).fill(0);
  const graph: number[][] = Array.from({ length: n }, () => []);

  for (const [course, pre] of prerequisites) {
    graph[pre].push(course);
    inDegree[course]++;
  }

  let q: number[] = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] == 0) {
      q.push(i);
    }
  }

  let idx = 0;
  let res: number[] = [];
  while (q.length) {
    const cur = q.shift()!;
    res.push(cur);
    idx++;
    for (const u of graph[cur]) {
      inDegree[u]--;
      if (inDegree[u] == 0) {
        q.push(u);
      }
    }
  }

  if (idx < n) return [];
  return res;
}
