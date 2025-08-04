function maxProfit(prices: number[]): number {
  const n = prices.length;

  const f = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    f[i] = f[i - 1];
    for (let j = 1; j < i; j++) {
      f[i] = Math.max(f[i], prices[i - 1] - prices[j - 1] + (j == 1 ? 0 : f[j - 2]));
    }
  }
  return f[n];
}

function maxProfit(prices: number[]): number {
  const n = prices.length;

  const f = Array(n + 1).fill(0);
  let bestPrev = -prices[0];

  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 1];
    f[i] = Math.max(f[i], prices[i - 1] + bestPrev);
    bestPrev = Math.max(bestPrev, -prices[i - 1] + f[i - 2]);
  }

  return f[n];
}
/* 
Idea này hay ạ.
Cái chạy đến đâu cập nhật đến đó hay ghê. 

Nếu k >= n/2 thì dễ hơn ạ. 
*/
