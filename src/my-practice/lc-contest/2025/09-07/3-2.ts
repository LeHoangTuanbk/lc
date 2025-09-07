// Monotonic stack
export function bowlSubarrays(nums: number[]): number {
  const n = nums.length;
  let count = 0;

  const stack: number[] = [];

  for (let i = 0; i < n; i++) {
    while (stack.length >= 2 && nums[i] > nums[stack[stack.length - 1]]) {
      count++;
      stack.pop();
    }
    stack.push(i);
  }
  return count;
}

const nums = [2, 5, 3, 1, 4];
console.log(bowlSubarrays(nums)); // 2

const nums2 = [5, 1, 2, 3, 4];
console.log(bowlSubarrays(nums2)); // 3
