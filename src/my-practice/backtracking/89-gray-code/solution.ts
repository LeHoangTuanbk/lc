function grayCode(n: number): number[] {
  const total = 1 << n;
  const res = [0];
  const seen = new Set<number>([0]);
  function dfs(cur: number): boolean {
    if (res.length === total) {
      const first = res[0],
        last = res.at(-1);
      const diff = first ^ last;
      if ((diff & (diff - 1)) === 0) return true;
      else return false;
    }
    for (let b = 0; b < n; b++) {
      const nxt = cur ^ (1 << b);
      if (!seen.has(nxt)) {
        seen.add(nxt);
        res.push(nxt);
        if (dfs(nxt)) return true;
        res.pop();
        seen.delete(nxt);
      }
    }
    return false;
  }
  dfs(0);
  return res;
}
