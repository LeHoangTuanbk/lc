export function trap(height: number[]): number {
  const n = height.length;
  if (n <= 2) return 0;

  let left = 1,
    right = n - 2;
  let maxLeft = height[0],
    maxRight = height[n - 1];
  let ans = 0;

  while (left <= right) {
    if (maxLeft < maxRight) {
      if (height[left] > maxLeft) {
        maxLeft = height[left];
      } else {
        ans += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] > maxRight) {
        maxRight = height[right];
      } else {
        ans += maxRight - height[right];
      }
      right--;
    }
  }

  return ans;
}
