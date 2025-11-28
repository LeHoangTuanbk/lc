export function countPairs(nums: number[], k: number): number {
  const freq = new Map<number, number>();
  let ans = 0;

  for (const x of nums) {
    const g = gcd(x, k);

    for (const [g2, cnt] of freq.entries()) {
      if ((g * g2) % k === 0) {
        ans += cnt;
      }
    }

    freq.set(g, (freq.get(g) || 0) + 1);
  }
  return ans;
}

function gcd(a: number, b: number): number {
  if (b === 0) return a;
  return gcd(b, a % b);
}
