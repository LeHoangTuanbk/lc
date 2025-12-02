export function smallestMissingValueSubtree(parents: number[], nums: number[]): number[] {
  const n = parents.length;
  const adj: number[][] = Array.from({ length: n }, () => []);
  for (let i = 1; i < n; i++) {
    adj[parents[i]].push(i);
  }

  const where1 = nums.indexOf(1);
  const ans = Array(n).fill(1);
  if (where1 === -1) return ans;

  const LIMIT = 100002;
  const seen = new Uint8Array(LIMIT);

  const dfsAdd = (u: number) => {
    const val = nums[u];
    seen[val] = 1;

    for (const v of adj[u]) dfsAdd(v);
  };

  let mex = 1;
  let cur = where1;
  let prev = -1;

  while (cur !== -1) {
    for (const v of adj[cur]) {
      if (v === prev) continue;
      dfsAdd(v);
    }
    seen[nums[cur]] = 1;

    while (seen[mex] === 1) mex++;
    ans[cur] = mex;

    prev = cur;
    cur = parents[cur];
  }

  return ans;
}
