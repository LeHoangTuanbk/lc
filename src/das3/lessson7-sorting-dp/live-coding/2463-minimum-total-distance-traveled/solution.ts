export function minimumTotalDistance(robot: number[], factory: number[][]): number {
  // dp[i][j], i robots, j factories
  // cost(i, j)= abs(robot[i] - factor[j])
  // + dp[i - 1][j - 1]

  // dp[i][j - 1]

  robot.sort((a, b) => a - b);
  factory.sort((a, b) => a[0] - b[0]);

  const factory2: number[] = [];
  for (const f of factory) {
    for (let i = 0; i < f[1]; i++) {
      factory2.push(f[0]);
    }
  }

  const m = robot.length,
    n = factory2.length;
  // first i robots, first j factories
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(Infinity));

  for (let i = 0; i <= n; i++) {
    dp[0][i] = 0;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j - 1] + Math.abs(robot[i - 1] - factory2[j - 1]),
        dp[i][j - 1],
      );
    }
  }

  return dp[m][n];
}

/* 
Input: robot = [0,4,6], factory = [[2,2],[6,2]]
Output: 4
Explanation: As shown in the figure:
- The first robot at position 0 moves in the positive direction. It will be repaired at the first factory.
- The second robot at position 4 moves in the negative direction. It will be repaired at the first factory.
- The third robot at position 6 will be repaired at the second factory. It does not need to move.
The limit of the first factory is 2, and it fixed 2 robots.
The limit of the second factory is 2, and it fixed 1 robot.
The total distance is |2 - 0| + |2 - 4| + |6 - 6| = 4. It can be shown that we cannot achieve a better total distance than 4.

*/
