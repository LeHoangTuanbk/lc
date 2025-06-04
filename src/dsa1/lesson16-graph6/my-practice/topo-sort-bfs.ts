export function topologicalSortBFS(n: number, graph: number[][]) {
  const inDegree: number[] = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (const u of graph[i]) {
      inDegree[u]++;
    }
  }

  let q: number[] = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) {
      q.push(i);
    }
  }
  let res: number[] = [];
  let idx = 0;
  while (q.length) {
    const cur = q.shift()!;
    res.push(cur);
    idx++;
    for (const u of graph[cur]) {
      inDegree[u]--;
      if (inDegree[u] === 0) {
        q.push(u);
      }
    }
  }
  if (idx < n) {
    return 'cyclic graph';
  }

  return res;
}

const graph2 = [
  [], // 0
  [], // 1
  [3], // 2 → 3
  [1], // 3 → 1
  [], // 4
  [2, 4], // 5 → 2, 4
];
console.log(topologicalSortBFS(6, graph2)); // [ 0, 5, 2, 4, 3, 1 ]

const graphCycle = [
  [1], // 0 → 1
  [2], // 1 → 2
  [0], // 2 → 0
];
console.log(topologicalSortBFS(3, graphCycle)); // ✅ Expected: []
