export function smallestMissingValueSubtree(parents: number[], nums: number[]): number[] {
  const n = parents.length;

  const adj: number[][] = Array.from({ length: n }, () => []);
  for (let i = 1; i < n; i++) {
    adj[parents[i]].push(i);
  }

  const ans = Array(n).fill(1);

  const collect = (u: number, arr: number[]) => {
    arr.push(u);
    for (const v of adj[u]) {
      collect(v, arr);
    }
  };

  for (let i = 0; i < n; i++) {
    const nodes: number[] = [];
    collect(i, nodes);

    const seen = new Set<number>();

    for (const x of nodes) {
      seen.add(nums[x]);
    }
    let mex = 1;
    while (seen.has(mex)) mex++;
    ans[i] = mex;
  }

  return ans;
}

const parents = [-1, 0, 0, 2],
  nums = [1, 2, 3, 4];
console.log(smallestMissingValueSubtree(parents, nums));
