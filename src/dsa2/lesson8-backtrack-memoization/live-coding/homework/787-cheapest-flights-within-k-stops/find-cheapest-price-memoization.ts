export function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number,
): number {
  const graph: [number, number][][] = Array.from({ length: n }, () => []);
  for (const [u, v, price] of flights) {
    graph[u].push([v, price]);
  }

  const memo: number[][] = Array.from({ length: n }, () => Array(k + 2).fill(undefined));

  function dp(node: number, remainingK: number): number {
    if (remainingK < 0) return Infinity;
    if (node === dst) return 0;
    if (memo[node][remainingK] !== undefined) return memo[node][remainingK];

    let minCost = Infinity;
    for (const [v, price] of graph[node]) {
      const temp = dp(v, remainingK - 1);
      if (temp !== Infinity) {
        minCost = Math.min(minCost, price + temp);
      }
    }

    memo[node][remainingK] = minCost;
    return minCost;
  }

  const result = dp(src, k + 1);
  return result === Infinity ? -1 : result;
}

const n = 4,
  flights = [
    [0, 1, 100],
    [1, 2, 100],
    [2, 0, 100],
    [1, 3, 600],
    [2, 3, 200],
  ],
  src = 0,
  dst = 3,
  k = 1;
console.log(findCheapestPrice(n, flights, src, dst, k));
