export function maxProfit3(prices: number[]): number {
  let currentMin = Infinity;
  const n = prices.length;
  const dp = Array(n + 1).fill(0);

  for (let i = 0; i < prices.length; i++) {
    currentMin = Math.min(currentMin, prices[i]);
    dp[i] = prices[i] - currentMin;
  }

  return Math.max(...dp);
}
// => Optimize space
export function maxProfit(prices: number[]): number {
  let best = 0;
  let currentMin = Infinity;
  for (let price of prices) {
    currentMin = Math.min(currentMin, price);
    best = Math.max(best, price - currentMin);
  }

  return best;
}

export function maxProfit2(prices: number[]): number {
  let best = 0;
  let currentMin = Infinity;

  for (let i = 0; i < prices.length; i++) {
    currentMin = Math.min(currentMin, prices[i]);
    best = Math.max(best, prices[i] - currentMin);
  }

  return best;
}

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
/* 
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

- 2 pointers : ok
- Kadane's algorithms: sum max diff
- DP, greedy: Loi nhat co the neu ngay do ban. : ok

*/
