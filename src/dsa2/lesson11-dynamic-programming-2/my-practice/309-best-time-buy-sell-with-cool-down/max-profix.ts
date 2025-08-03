export function maxProfit(prices: number[]): number {
  const n = prices.length;
  if (n == 0) return 0;

  const hold: number[] = Array(n).fill(0);
  const sold: number[] = Array(n).fill(0);
  const rest: number[] = Array(n).fill(0);

  hold[0] = -prices[0];
  sold[0] = 0;
  rest[0] = 0;

  for (let i = 1; i < n; i++) {
    hold[i] = Math.max(hold[i - 1], rest[i - 1] - prices[i]);
    sold[i] = hold[i - 1] + prices[i];
    rest[i] = Math.max(rest[i - 1], sold[i - 1]);
  }

  return Math.max(sold[n - 1], rest[n - 1]);
}

/* 
Example 1:

Input: prices = [1,2,3,0,2]
Output: 3
Explanation: transactions = [buy, sell, cooldown, buy, sell]
Example 2:

Input: prices = [1]
Output: 0
*/
const prices = [1, 2, 3, 0, 2];
console.log(maxProfit(prices));
