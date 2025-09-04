export function numTrees(n: number): number {
  const dp: number[] = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let node = 2; node <= n; node++) {
    for (let root = 1; root <= node; root++) {
      dp[node] += dp[root - 1] * dp[node - root];
    }
  }
  return dp[n];
}

export function numTrees2(n: number): number {
  const map = new Map<number, number>();

  function calNumTree(node: number) {
    if (node < 2) return 1;
    if (map.get(node)) return map.get(node);
    let res = 0;
    for (let root = 1; root <= node; root++) {
      res += calNumTree(root - 1) * calNumTree(node - root);
    }
    map.set(node, res);
    return res;
  }
  return calNumTree(n);
}

console.log(numTrees2(3));
