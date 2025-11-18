function closestToTarget(arr: number[], target: number): number {
  let cur = new Set<number>();
  let ans = Infinity;

  for (const x of arr) {
    const next = new Set<number>();
    next.add(x);
    ans = Math.min(ans, Math.abs(x - target));

    for (const v of cur) {
      const w = v & x;
      next.add(w);
      ans = Math.min(ans, Math.abs(w - target));
    }
    cur = next;
  }
  return ans;
}
