export function minNumberOfSemesters(n: number, relations: number[][], k: number): number {
  const pre: number[] = Array(n).fill(0);
  for (const [u, v] of relations) {
    pre[v - 1] |= 1 << (u - 1);
  }

  const dp: number[] = Array(1 << n).fill(Infinity);
  dp[0] = 0;
  const queue: number[] = [0];

  while (queue.length) {
    const mask = queue.shift();
    const canTake: number[] = [];

    for (let i = 0; i < n; i++) {
      if ((mask >> i) & 1) continue;
      if ((mask & pre[i]) === pre[i]) {
        canTake.push(i);
      }
    }

    const subSets = generateSubsets(canTake, k);

    for (const subset of subSets) {
      let nextMask = mask;
      for (const course of subset) {
        nextMask |= 1 << course;
      }
      if (dp[nextMask] > dp[mask] + 1) {
        dp[nextMask] = dp[mask] + 1;
        queue.push(nextMask);
      }
    }
  }

  return dp[(1 << n) - 1];
}

function generateSubsets(arr: number[], k: number): number[][] {
  const res: number[][] = [];
  const backtrack = (start: number, path: number[]) => {
    if (path.length > 0 && path.length <= k) res.push([...path]);
    if (path.length === k) return;
    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  };
  backtrack(0, []);
  return res;
}
