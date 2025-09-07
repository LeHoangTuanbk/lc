// traverse all (l,r) pairs => check bowl
function bowlSubarrays2(nums: number[]): number {
  let count = 0;
  const n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    const firstEnd = nums[i];
    let currentLocalMax = nums[i + 1];
    for (let j = i + 2; j < n; j++) {
      let secondEnd = nums[j];
      if (Math.min(firstEnd, secondEnd) > currentLocalMax) {
        count++;
      }
      currentLocalMax = Math.max(currentLocalMax, secondEnd);
    }
  }
  return count;
}

// Monotonic stack
function bowlSubarrays(nums: number[]): number {
  const n = nums.length;
  let count = 0;

  const stack: number[] = [];

  for (let i = 0; i < n; i++) {
    while (
      stack.length >= 2 &&
      nums[stack[stack.length - 2]] > nums[stack[stack.length - 1]] &&
      nums[i] > nums[stack[stack.length - 1]]
    ) {
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
