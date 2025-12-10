export function kthSmallestPath(destination: number[], k: number): string {
  const m = destination[0],
    n = destination[1];

  let res = '';
  let u = 0,
    v = 0;

  let C: number[][] = Array(32)
    .fill(0)
    .map(() => Array(32).fill(0));

  for (let i = 0; i <= m + n; i++) {
    C[i][0] = 1;
    for (let j = 1; j <= i; j++) C[i][j] = C[i - 1][j] + C[i - 1][j - 1];
  }

  for (let i = 1; i <= m + n; i++) {
    const h = v + 1 <= n ? C[m - u + n - v - 1][m - u] : 0;
    if (h >= k) {
      res += 'H';
      v++;
    } else {
      res += 'V';
      u++;
      k -= h;
    }
  }

  return res;
}
