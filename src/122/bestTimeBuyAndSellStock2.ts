export function maxProfit(prices: number[]): number {
  let benefit: number = 0;
  let currentBoughtStock: number | undefined = undefined;
  for (let i = 0; i < prices.length - 1; i++) {
    // Buy
    if (prices[i] <= prices[i + 1] && currentBoughtStock == undefined) {
      currentBoughtStock = prices[i];
      continue;
    }
    // Sell
    if (prices[i] > prices[i + 1] && currentBoughtStock != undefined) {
      benefit += prices[i] - currentBoughtStock;
      currentBoughtStock = undefined;
    }
  }
  if (currentBoughtStock !== undefined) {
    return benefit + prices[prices.length - 1] - currentBoughtStock;
  }
  return benefit;
}
