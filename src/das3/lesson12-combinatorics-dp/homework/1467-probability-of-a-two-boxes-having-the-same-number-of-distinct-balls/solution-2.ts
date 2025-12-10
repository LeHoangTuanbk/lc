export function getProbability(balls: number[]): number {
  const k = balls.length;
  const totalBalls = balls.reduce((s, v) => s + v, 0);
  const n = totalBalls / 2;
  const maxN = totalBalls;
  const C: number[][] = Array.from({ length: maxN + 1 }, (_, i) => Array(maxN + 1).fill(0));
  for (let i = 0; i <= maxN; i++) {
    C[i][0] = 1;
    for (let j = 1; j <= i; j++) C[i][j] = C[i - 1][j - 1] + C[i - 1][j];
  }

  let favorable = 0;
  function dfs(idx: number, chosen: number, ways: number, distinctA: number, distinctB: number) {
    if (idx === k) {
      if (chosen === n && distinctA === distinctB) favorable += ways;
      return;
    }
    const total = balls[idx];
    for (let x = 0; x <= total; x++) {
      const newChosen = chosen + x;
      if (newChosen > n) break;
      const addWays = ways * C[total][x];
      const newDistinctA = distinctA + (x > 0 ? 1 : 0);
      const newDistinctB = distinctB + (total - x > 0 ? 1 : 0);
      dfs(idx + 1, newChosen, addWays, newDistinctA, newDistinctB);
    }
  }

  dfs(0, 0, 1, 0, 0);
  const totalWays = C[totalBalls][n];
  return favorable / totalWays;
}
