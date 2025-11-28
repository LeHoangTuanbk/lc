export function tilingRectangle(n: number, m: number): number {
  if (n > m) [n, m] = [m, n];

  const memo = new Map<string, number>();

  function dfs(heights: number[]): number {
    const key = heights.join('.');
    if (memo.has(key)) return memo.get(key);

    let minH = Infinity,
      idx = -1;
    for (let i = 0; i < m; i++) {
      if (heights[i] < minH) {
        minH = heights[i];
        idx = i;
      }
    }

    if (minH === n) return 0;

    let res = Infinity;

    let maxSize = Math.min(n - heights[idx], m - idx);
    for (let k = maxSize; k >= 1; k--) {
      let ok = true;

      for (let j = idx; j < idx + k; j++) {
        if (heights[j] !== minH) {
          ok = false;
          break;
        }
      }

      if (!ok) continue;

      const newH = heights.slice();
      for (let j = idx; j < idx + k; j++) {
        newH[j] += k;
      }

      res = Math.min(res, 1 + dfs(newH));
    }

    memo.set(key, res);
    return res;
  }

  return dfs(Array(m).fill(0));
}
