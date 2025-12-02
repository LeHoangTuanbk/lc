const MOD = 1_000_000_007;

export function waysToBuildRooms(prevRoom: number[]): number {
  const n = prevRoom.length;
  const g: number[][] = Array.from({ length: n }, () => []);
  for (let i = 1; i < n; i++) {
    g[prevRoom[i]].push(i);
  }

  const fact = Array(n + 1).fill(1);
  const inv = Array(n + 1).fill(1);
  for (let i = 1; i <= n; i++) fact[i] = (fact[i - 1] * i) % MOD;

  const modPow = (a: number, e: number): number => {
    let r = 1;
    while (e > 0) {
      if (e & 1) r = (r * a) % MOD;
      a = (a * a) % MOD;
      e >>= 1;
    }
    return r;
  };
  inv[n] = modPow(fact[n], MOD - 2);
  for (let i = n - 1; i >= 0; i--) inv[i] = (inv[i + 1] * (i + 1)) % MOD;

  const size = Array(n).fill(0);
  const ways = Array(n).fill(0);

  const dfs = (u: number) => {
    size[u] = 1;
    ways[u] = 1;
    const childSizes: number[] = [];
    for (const v of g[u]) {
      dfs(v);
      size[u] += size[v];
      ways[u] = (ways[u] * ways[v]) % MOD;
      childSizes.push(size[v]);
    }
    if (childSizes.length <= 1) return;

    let sum = 0;
    let denom = 1;

    for (const s of childSizes) {
      sum += s;
      denom = (denom * inv[s]) % MOD;
    }

    ways[u] = (((ways[u] * fact[sum]) % MOD) * denom) % MOD;
  };

  dfs(0);
  return ways[0];
}
