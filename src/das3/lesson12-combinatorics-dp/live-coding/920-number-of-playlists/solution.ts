const mod = 1e9 + 7;
export function numMusicPlaylists(n: number, goal: number, k: number): number {
  function f(n: number, goal: number, k: number) {
    let res = 1;
    for (let i = 1; i <= k; i++) res = (res * (n - i + 1)) % mod;
    for (let i = k + 1; i <= goal; i++) res = (res * (n - k)) % mod;
    return res;
  }

  let C: number[][] = Array(102)
    .fill(0)
    .map(() => Array(102).fill(0));

  for (let i = 0; i <= n; i++) {
    C[i][0] = 1;
    for (let j = 1; j <= i; j++) C[i][j] = (C[i - 1][j] + C[i - 1][j - 1]) % mod;
  }

  let res = 0;
  for (let i = n; i >= k; i--) {
    let tmp = (f(i, goal, k) * C[n][i]) % mod;
    if (i % 2 === n % 2) {
      res = (res + tmp) % mod;
    } else {
      res = (res - tmp + mod) % mod;
    }
  }

  return res;
}
