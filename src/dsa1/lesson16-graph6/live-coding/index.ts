export function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  for (const [course, preCourse] of prerequisites) {
    graph[preCourse].push(course);
  }
  const visited = Array(numCourses).fill(false);
  const res: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (visited[i]) continue;
    dfs(i, visited, graph, res);
  }

  return res.reverse();
}

function dfs(cur: number, visited: boolean[], graph: number[][], res: number[]) {
  visited[cur] = true;
  for (const u of graph[cur]) {
    if (visited[u]) continue;
    dfs(u, visited, graph, res);
  }
  res.push(cur);
}

function findOrder2(numCourses: number, prerequisites: number[][]): number[] {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const inDegree: number[] = Array(numCourses).fill(0);

  for (const [course, preCourse] of prerequisites) {
    graph[preCourse].push(course); // đúng: preCourse → course
    inDegree[course]++; // ✅ sửa chỗ này
  }

  const q: number[] = [];
  const res: number[] = [];
  let idx = 0;
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      q.push(i);
    }
  }
  while (q.length) {
    const cur = q.shift()!;
    res[idx++] = cur;
    for (const u of graph[cur]) {
      inDegree[u]--;
      if (inDegree[u] == 0) {
        q.push(u);
      }
    }
  }
  if (idx < numCourses) {
    return [];
  }
  return res;
}
