export function minimumTime(nums1: number[], nums2: number[], x: number): number {
  const n = nums1.length;
  const sa = nums1.reduce((s, v) => s + v, 0);
  const sb = nums2.reduce((s, v) => s + v, 0);

  const pairs: [number, number][] = nums2.map((b, i) => [b, nums1[i]]);
  pairs.sort((a, b) => a[0] - b[0]);

  const dp = new Array<number>(n + 1).fill(0);

  for (let j = 0; j < n; ++j) {
    const [b, a] = pairs[j];
    for (let i = j + 1; i > 0; --i) {
      dp[i] = Math.max(dp[i], dp[i - 1] + i * b + a);
    }
  }

  for (let i = 0; i <= n; ++i) {
    const total = sb * i + sa - dp[i];
    if (total <= x) return i;
  }
  return -1;
}

const nums1 = [1, 2, 3],
  nums2 = [1, 2, 3],
  x = 4;
console.log(minimumTime(nums1, nums2, x));
