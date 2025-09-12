export function sortedSquares(nums: number[]): number[] {
  let n = nums.length;
  let left = 0,
    right = n - 1;
  const res = new Array(n);
  let pos = n - 1;
  while (left <= right) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];
    if (leftSquare <= rightSquare) {
      res[pos] = rightSquare;
      right--;
    } else {
      res[pos] = leftSquare;
      left++;
    }
    pos--;
  }
  return res;
}
