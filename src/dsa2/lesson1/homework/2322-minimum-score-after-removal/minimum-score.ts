// References: https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/solutions/2198665/python-3-explanation-with-pictures/
// naive: remove 2 edges each, DFS: find 3 connected components, => calculate score => find score min. O(n3)
// More optimized: 3 cases => use XOR => O(n2)
export function minimumScore(nums: number[], edges: number[][]): number {
  const n = nums.length;

  const G: number[][] = Array.from({ length: n }, () => []);
  const C: Set<number>[] = Array.from({ length: n }, () => new Set());
  const A = [...nums];

  const degree = new Array(n).fill(0);

  for (const [u, v] of edges) {
    G[u].push(v);
    G[v].push(u);
    degree[u]++;
    degree[v]++;
  }

  let V = 0;
  for (const x of nums) V ^= x;

  const dq: number[] = [];
  const seen = new Set<number>();

  for (let i = 0; i < n; i++) {
    if (degree[i] === 1) {
      dq.push(i);
      seen.add(i);
    }
  }

  while (dq.length) {
    const cur = dq.shift();
    for (const next of G[cur]) {
      if (!seen.has(next)) {
        C[next].add(cur);
        for (const ch of C[cur]) C[next].add(ch);
        A[next] ^= A[cur];
      }
      degree[next]--;
      if (degree[next] === 1 && !seen.has(next)) {
        seen.add(next);
        dq.push(next);
      }
    }
  }

  let res = Infinity;
  for (let i = 0; i < edges.length - 1; i++) {
    for (let j = i + 1; j < edges.length; j++) {
      // a, c: lower break points
      let [a, b] = edges[i];
      if (C[a].has(b)) [a, b] = [b, a];

      let [c, d] = edges[j];
      if (C[c].has(d)) [c, d] = [d, c];

      let x1: number, x2: number, x3: number;

      if (C[a].has(c)) {
        // c is a subtree of a
        x1 = A[c];
        x2 = A[a] ^ A[c];
        x3 = V ^ A[a];
      } else if (C[c].has(a)) {
        // a is a subtree of c
        x1 = A[a];
        x2 = A[c] ^ A[a];
        x3 = V ^ A[c];
      } else {
        // disjoint
        x1 = A[a];
        x2 = A[c];
        x3 = V ^ A[a] ^ A[c];
      }

      res = Math.min(res, Math.max(x1, x2, x3) - Math.min(x1, x2, x3));
    }
  }

  return res;
}

const nums = [1, 5, 5, 4, 11],
  edges = [
    [0, 1],
    [1, 2],
    [1, 3],
    [3, 4],
  ];
console.log(minimumScore(nums, edges));

// DFS
export function minimumScore2(nums: number[], edges: number[][]): number {
  const n = nums.length;

  // 1. Build graph
  const G: number[][] = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    G[u].push(v);
    G[v].push(u);
  }

  // 2. Prepare for DFS
  const subXor = new Array(n).fill(0);
  const inTime = new Array(n).fill(0);
  const outTime = new Array(n).fill(0);
  let time = 0;

  // 3. DFS traversal
  function dfs(u: number, parent: number): void {
    inTime[u] = time++;
    subXor[u] = nums[u];
    for (const v of G[u]) {
      if (v === parent) continue;
      dfs(v, u);
      subXor[u] ^= subXor[v];
    }
    outTime[u] = time++;
  }

  dfs(0, -1);
  const totalXor = subXor[0];

  // 4. Helper: check ancestor-descendant relation
  function isAncestor(anc: number, desc: number): boolean {
    return inTime[anc] < inTime[desc] && outTime[desc] < outTime[anc];
  }

  // 5. Try all edge pairs
  let res = Infinity;
  for (let i = 0; i < edges.length; i++) {
    for (let j = i + 1; j < edges.length; j++) {
      let [a1, a2] = edges[i];
      let [b1, b2] = edges[j];

      // Ensure child comes first in pair
      const a = inTime[a1] > inTime[a2] ? a1 : a2;
      const b = inTime[b1] > inTime[b2] ? b1 : b2;

      let x: number, y: number, z: number;

      if (isAncestor(a, b)) {
        // b ∈ subtree(a)
        x = subXor[b];
        y = subXor[a] ^ subXor[b];
        z = totalXor ^ subXor[a];
      } else if (isAncestor(b, a)) {
        // a ∈ subtree(b)
        x = subXor[a];
        y = subXor[b] ^ subXor[a];
        z = totalXor ^ subXor[b];
      } else {
        // disjoint
        x = subXor[a];
        y = subXor[b];
        z = totalXor ^ subXor[a] ^ subXor[b];
      }

      res = Math.min(res, Math.max(x, y, z) - Math.min(x, y, z));
    }
  }

  return res;
}
/* 
Input: nums = [1,5,5,4,11], edges = [[0,1],[1,2],[1,3],[3,4]]
Output: 9
Explanation: The diagram above shows a way to make a pair of removals.
- The 1st component has nodes [1,3,4] with values [5,4,11]. Its XOR value is 5 ^ 4 ^ 11 = 10.
- The 2nd component has node [0] with value [1]. Its XOR value is 1 = 1.
- The 3rd component has node [2] with value [5]. Its XOR value is 5 = 5.
The score is the difference between the largest and smallest XOR value which is 10 - 1 = 9.
It can be shown that no other pair of removals will obtain a smaller score than 9.

Input: nums = [5,5,2,4,4,2], edges = [[0,1],[1,2],[5,2],[4,3],[1,3]]
Output: 0
Explanation: The diagram above shows a way to make a pair of removals.
- The 1st component has nodes [3,4] with values [4,4]. Its XOR value is 4 ^ 4 = 0.
- The 2nd component has nodes [1,0] with values [5,5]. Its XOR value is 5 ^ 5 = 0.
- The 3rd component has nodes [2,5] with values [2,2]. Its XOR value is 2 ^ 2 = 0.
The score is the difference between the largest and smallest XOR value which is 0 - 0 = 0.
We cannot obtain a smaller score than 0.


Input: nums = [1,5,5,4,11], edges = [[0,1],[1,2],[1,3],[3,4]]
Output: 9
Explanation: The diagram above shows a way to make a pair of removals.
- The 1st component has nodes [1,3,4] with values [5,4,11]. Its XOR value is 5 ^ 4 ^ 11 = 10.
- The 2nd component has node [0] with value [1]. Its XOR value is 1 = 1.
- The 3rd component has node [2] with value [5]. Its XOR value is 5 = 5.
The score is the difference between the largest and smallest XOR value which is 10 - 1 = 9.
It can be shown that no other pair of removals will obtain a smaller score than 9.

*/
