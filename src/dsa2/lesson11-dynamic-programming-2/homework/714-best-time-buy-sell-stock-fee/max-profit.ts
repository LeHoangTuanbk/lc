export function maxProfit(prices: number[], fee: number): number {
  const n = prices.length;
  const hold: number[] = Array(n + 1).fill(0); // buy or do nothing from hold day
  const cash: number[] = Array(n + 1).fill(0); // after selling

  hold[0] = -prices[0];
  for (let i = 1; i <= n; i++) {
    hold[i] = Math.max(hold[i - 1], cash[i - 1] - prices[i - 1]);
    cash[i] = Math.max(cash[i - 1], hold[i - 1] + prices[i - 1] - fee);
  }
  return cash[n];
}
/* 
hold[i] = max(hold[i-1], cash[i-1] - prices[i])            // hôm nay mua hoặc không làm gì
cash[i] = max(cash[i-1], hold[i-1] + prices[i] - fee)      // hôm nay bán hoặc không làm gì
*/

export function maxProfit2(prices: number[], fee: number): number {
  const n = prices.length;
  let cash = 0;
  let hold = -prices[0];

  for (let i = 1; i <= n; i++) {
    const nextHold = Math.max(hold, cash - prices[i - 1]);
    const nextCash = Math.max(cash, hold + prices[i - 1] - fee);
    hold = nextHold;
    cash = nextCash;
  }
  return cash;
}

const prices = [1, 3, 2, 8, 4, 9],
  fee = 2;

console.log(maxProfit2(prices, fee));
