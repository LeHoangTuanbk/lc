// 2646. Minimize the Total Price of the Trips
// TypeScript implementation with LCA + Tree DP

export function minimumTotalPrice(
  n: number,
  edges: number[][],
  price: number[],
  trips: number[][],
): number {
  // ---------------------------
  // 1. Build tree
  // ---------------------------
  const g: number[][] = Array.from({ length: n }, () => []);

  for (const [a, b] of edges) {
    g[a].push(b);
    g[b].push(a);
  }

  // ---------------------------
  // 2. Build parent, depth, LCA tables
  // ---------------------------
  const LOG = Math.ceil(Math.log2(n)) + 1;
  const parent = Array.from({ length: LOG }, () => Array(n).fill(-1));
  const depth = Array(n).fill(0);

  const dfsInit = (u: number, p: number) => {
    parent[0][u] = p;
    for (const v of g[u]) {
      if (v === p) continue;
      depth[v] = depth[u] + 1;
      dfsInit(v, u);
    }
  };

  dfsInit(0, -1);

  for (let k = 1; k < LOG; k++) {
    for (let i = 0; i < n; i++) {
      const mid = parent[k - 1][i];
      parent[k][i] = mid === -1 ? -1 : parent[k - 1][mid];
    }
  }

  const lca = (a: number, b: number) => {
    if (depth[a] < depth[b]) [a, b] = [b, a];

    // lift a up
    let diff = depth[a] - depth[b];
    for (let k = 0; k < LOG; k++) {
      if (diff & (1 << k)) {
        a = parent[k][a];
      }
    }

    if (a === b) return a;

    // lift both up
    for (let k = LOG - 1; k >= 0; k--) {
      if (parent[k][a] !== parent[k][b]) {
        a = parent[k][a];
        b = parent[k][b];
      }
    }
    return parent[0][a];
  };

  // ---------------------------
  // 3. Compute freq[] using LCA trick
  // freq[u]++ , freq[v]++ , freq[lca]-- , freq[parent[lca]]--
  // ---------------------------
  const freq = Array(n).fill(0);

  for (const [u0, v0] of trips) {
    const u = u0;
    const v = v0;
    const L = lca(u, v);

    freq[u]++;
    freq[v]++;
    freq[L]--;
    const pL = parent[0][L];
    if (pL !== -1) freq[pL]--;
  }

  // Propagate freq using DFS
  const dfsFreq = (u: number, p: number) => {
    for (const v of g[u]) {
      if (v === p) continue;
      dfsFreq(v, u);
      freq[u] += freq[v];
    }
  };
  dfsFreq(0, -1);

  // ---------------------------
  // 4. Tree DP for independent set
  // dp[u][0] = not halve u
  // dp[u][1] = halve u
  // ---------------------------
  const dp = Array.from({ length: n }, () => [0, 0]);

  const dfsDP = (u: number, p: number) => {
    // cost if not halved
    const costFull = freq[u] * price[u];
    // cost if halved
    const costHalf = freq[u] * (price[u] / 2);

    dp[u][0] = costFull;
    dp[u][1] = costHalf;

    for (const v of g[u]) {
      if (v === p) continue;
      dfsDP(v, u);

      // If u is not halved → v can be halved or not
      dp[u][0] += Math.min(dp[v][0], dp[v][1]);

      // If u is halved → v CANNOT be halved
      dp[u][1] += dp[v][0];
    }
  };

  dfsDP(0, -1);

  return Math.min(dp[0][0], dp[0][1]);
}
