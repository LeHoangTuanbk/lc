export function trap(height: number[]): number {
  const n = height.length;
  const leftMax = Array(n).fill(0);
  const rightMax = Array(n).fill(0);

  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i - 1]);
  }

  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i + 1]);
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    const waterHeight = Math.min(leftMax[i], rightMax[i]) - height[i];
    if (waterHeight > 0) res += waterHeight;
  }

  return res;
}
