export function maxProfit(k: number, prices: number[]): number {
  const n = prices.length;
  const f = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= k; i++) {
    let bestPrev = -Infinity;
    for (let j = 1; j <= n; j++) {
      f[i][j] = f[i][j - 1];
      f[i][j] = Math.max(f[i][j], prices[j - 1] + bestPrev);
      bestPrev = Math.max(bestPrev, f[i - 1][j - 1] - prices[j - 1]);
    }
  }
  return f[k][n];
}

/* 
Anh chữa thêm bài stock mà bán có fee được không ạ? 
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/description/

Cái kinh nghiệm bài đếm, với tối ưu
*/
