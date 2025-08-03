export function change(amount: number, coins: number[]): number {
  const dp: number[] = Array(amount + 1).fill(0);
  dp[0] = 1;
  for (const coin of coins) {
    for (let money = coin; money <= amount; money++) {
      dp[money] += dp[money - coin];
    }
  }
  return dp[amount];
}
const amount = 5,
  coins = [1, 2, 5];
console.log(change(amount, coins));
