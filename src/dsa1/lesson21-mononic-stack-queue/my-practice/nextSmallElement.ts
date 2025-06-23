export function nextSmallerElement(nums: number[]): number[] {
  const n = nums.length;
  const stack: number[] = [];
  const res: number[] = Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[stack[stack.length - 1]] >= nums[i]) {
      stack.pop();
    }
    if (stack.length) {
      res[i] = nums[stack[stack.length - 1]];
    }
    stack.push(i);
  }
  return res;
}

const nums = [5, 4, 7, 9, 1, 8];
// output:   [4, 1, 1, 1, 0, 0]
console.log(nextSmallerElement(nums));

/* 
Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
*/
