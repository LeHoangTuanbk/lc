export function findKthNumber(m: number, n: number, k: number): number {
  let lo = 1,
    hi = m * n;

  while (lo < hi) {
    const mid = (lo + hi) >> 1;

    let count = 0;
    for (let i = 1; i <= m; i++) {
      count += Math.min(Math.floor(mid / i), n);
    }

    if (count >= k) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }

  return lo;
}

const m = 3,
  n = 3,
  k = 5;
console.log(findKthNumber(m, n, k));
