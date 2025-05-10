function arrangeCoins2(n: number): number {
  let low = 1,
    high = n,
    res = 0;
  while (low <= high) {
    let k = low + Math.floor((high - low) / 2);
    let coinNeed = (k * (k + 1)) / 2;
    if (n >= coinNeed) {
      res = Math.max(res, k);
      low = k + 1;
    } else {
      high = k - 1;
    }
  }
  return res;
}

function arrangeCoins(n: number): number {
  return Math.floor(Math.sqrt(2 * n + 1 / 4) - 1 / 2);
}

console.log(arrangeCoins(5));
