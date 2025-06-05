export function canReconstructSequences3(nums: number[], sequences: number[][]) {
  const n = nums.length;
  const graph: number[][] = Array.from({ length: n + 1 }, () => []);
  const inDegree: number[] = Array(n + 1).fill(0);
  // Build graph
  for (const seq of sequences) {
    for (let i = 0; i < seq.length - 1; i++) {
      const u = seq[i];
      const v = seq[i + 1];
      graph[u].push(v);
      inDegree[v]++;
    }
  }

  // Get initial 0 indegree
  let q: number[] = [];
  for (let i = 1; i < n + 1; i++) {
    if (inDegree[i] == 0) {
      q.push(i);
    }
  }

  // Topo sort
  let idx = 0;
  while (q.length) {
    if (q.length > 1) return false;
    const cur = q.shift()!;
    if (nums[idx] != cur) return false;
    idx++;
    for (const u of graph[cur]) {
      inDegree[u]--;
      if (inDegree[u] === 0) {
        q.push(u);
      }
    }
  }

  return true;
}

export function canReconstructSequences(nums: number[], sequences: number[][]) {
  const n = nums.length;
  const graph: Map<number, Set<number>> = new Map();
  const inDegree: Map<number, number> = new Map();
  // Build graph
  for (const seq of sequences) {
    for (let i = 0; i < seq.length - 1; i++) {
      const u = seq[i];
      inDegree.set(u, inDegree.get(u) ?? 0);
      const v = seq[i + 1];
      if (!graph.has(u)) graph.set(u, new Set());
      if (!graph.get(u).has(v)) {
        graph.get(u).add(v);
        inDegree.set(v, (inDegree.get(v) ?? 0) + 1);
      }
    }
  }

  if (inDegree.size != n) return false;

  // Get initial 0 indegree
  let q: number[] = [];
  for (const [node, deg] of inDegree) {
    if (deg === 0) q.push(node);
  }

  // Topo sort
  let idx = 0;
  while (q.length) {
    if (q.length > 1) return false;
    const cur = q.shift()!;
    if (nums[idx++] != cur) return false;
    for (const nei of graph.get(cur) ?? []) {
      inDegree.set(nei, inDegree.get(nei)! - 1);
      if (inDegree.get(nei) === 0) q.push(nei);
    }
  }

  return idx === n;
}
