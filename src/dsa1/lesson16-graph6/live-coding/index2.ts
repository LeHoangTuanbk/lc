export function sequenceReconstruction(nums: number[], sequences: number[][]): boolean {
  const n = nums.length;
  const inDegree = Array(n + 1).fill(0);
  const graph: number[][] = Array.from({ length: n }, () => []);

  for (const e of sequences) {
    for (let i = 0; i < e.length - 1; i++) {
      const u = e[i];
      const v = e[i + 1];
      graph[u].push(v);
      inDegree[v]++;
    }
  }

  const q: number[] = [];
  for (let i = 1; i <= n; i++) {
    if (inDegree[i] === 0) {
      q.push(i);
    }
  }

  while (q.length) {
    if (q.length > 1) {
      return false;
    }
    const cur = q.shift()!;
    for (const u of graph[cur]) {
      inDegree[u]--;
      if (inDegree[u] == 0) {
        q.push(u);
      }
    }
  }
  return true;
}

const nums = [1, 2, 3],
  sequences = [
    [1, 2],
    [1, 3],
  ];
console.log(sequenceReconstruction(nums, sequences));
