export function maxScore(nums: number[]): number {
  const n = nums.length;
  const dp = Array(1 << n).fill(0);
  for (let mask = 0; mask < 1 << n; mask++) {
    const bits = countBits(mask);
    if (bits & 1) continue;
    const i = (bits >> 1) + 1;
    for (let u = 0; u + 1 < n; u++) {
      if ((mask >> u) & 1) continue;
      for (let v = u + 1; v < n; v++) {
        if ((mask >> v) & 1) continue;
        const mask2 = mask | (1 << u) | (1 << v);
        dp[mask2] = Math.max(dp[mask2], dp[mask] + gcd(nums[u], nums[v]) * i);
      }
    }
  }
  return dp[(1 << n) - 1];
}

function countBits(mask: number): number {
  let count = 0;
  while (mask > 0) {
    count += mask & 1;
    mask >>= 1;
  }
  return count;
}

function gcd(a: number, b: number): number {
  if (b === 0) {
    return a;
  } else return gcd(b, a % b);
}

const nums = [3, 4, 6, 8];
console.log(maxScore(nums));
