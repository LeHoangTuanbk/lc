export function numberWays(hats: number[][]): number {
  const MOD: number = 10 ** 9 + 7;
  const n: number = hats.length;

  const hatToPeople: number[][] = Array.from({ length: 41 }, () => []);
  for (let personId = 0; personId < n; personId++) {
    for (const hatsId of hats[personId]) {
      hatToPeople[hatsId].push(personId);
    }
  }
  const dp: number[][] = Array.from({ length: 1 << n }, () => Array(41).fill(0));
  dp[0][0] = 1;

  for (let j = 1; j <= 40; j++) {
    // Not use hat jth
    for (let mask = 0; mask < 1 << n; mask++) {
      dp[mask][j] = dp[mask][j - 1];
    }

    // use hat jth
    for (let mask = 0; mask < 1 << n; mask++) {
      for (const p of hatToPeople[j]) {
        if (((mask >> p) & 1) == 0) {
          const newMask = mask | (1 << p);
          dp[newMask][j] = (dp[newMask][j] + dp[mask][j - 1]) % MOD;
        }
      }
    }
  }

  return dp[(1 << n) - 1][40] % MOD;
}
