export function mincostTickets(days: number[], costs: number[]): number {
  const travel = new Set(days);
  const lastDay = days.at(-1);
  const dp = new Array(lastDay + 1).fill(0);
  for (let d = 1; d <= lastDay; d++) {
    if (!travel.has(d)) {
      dp[d] = dp[d - 1];
    } else {
      dp[d] = Math.min(
        dp[Math.max(0, d - 1)] + costs[0],
        dp[Math.max(0, d - 7)] + costs[1],
        dp[Math.max(0, d - 30)] + costs[2],
      );
    }
  }
  return dp[lastDay];
}

const days = [1, 4, 6, 7, 8, 20],
  costs = [2, 7, 15];
console.log(mincostTickets(days, costs)); // 11
/* 
d   1 2  3  4. 
dp. 2 2. 2. 2+ 2 or 7 or 15 = 4

6: 6
7: 8 or 7 = 7;
8: 9 or 9 = 9

20: 11. 
*/
