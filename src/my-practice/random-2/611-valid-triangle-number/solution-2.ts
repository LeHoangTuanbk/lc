export function triangleNumber(nums: number[]): number {
  const n = nums.length;
  let count = 0;

  nums.sort((a, b) => a - b);

  for (let k = n - 1; k >= 2; k--) {
    let i = 0,
      j = k - 1;

    while (i < j) {
      if (nums[i] + nums[j] > nums[k]) {
        count += j - i;
        j--;
      } else {
        i++;
      }
    }
  }
  return count;
}
