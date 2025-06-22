export function nextGreaterElements(nums: number[]): number[] {
  const numsConcat = nums.concat(nums);
  const stack: number[] = [];
  const n = nums.length;
  const res: number[] = Array(n).fill(0);
  for (let i = 2 * n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= numsConcat[i]) {
      stack.pop();
    }

    if (i < n) {
      res[i] = stack.length ? stack[stack.length - 1] : -1;
    }

    stack.push(numsConcat[i]);
  }
  return res;
}

export function nextGreaterElements2(nums: number[]): number[] {
  const stack: number[] = [];
  const n = nums.length;
  const res: number[] = Array(n).fill(0);
  for (let i = 2 * n - 1; i >= 0; i--) {
    const index = i % n;
    while (stack.length && stack[stack.length - 1] <= nums[index]) {
      stack.pop();
    }

    if (i < n) {
      res[i] = stack.length ? stack[stack.length - 1] : -1;
    }

    stack.push(nums[index]);
  }
  return res;
}

const nums = [1, 2, 1];
console.log(nextGreaterElements2(nums));
/* 
Example 1:

Input: nums = [1,2,1]
Output: [2,-1,2]


nums = [1,2,1,1,2,1]
n = 3
res [0,0...]

Step 1: n = 5;
stack 1
res

Step 2: n = 4
numsConcat[4] = 2
stack: [] => [2]

Step 3: n = 3
stack: [1] => [2,1]

Step 4: i = 2
numsConcat[2] = 1
stack: [2] => res[2] = 2
=> stack: [2,1]

Step 5: i = 1
numsConcat[1] = 2
stack: [] => res[1] = -1
stack = [2]

Step 6: i = 0
stack [2], res[0] = 2

res = [2,-1, 2]



Explanation: The first 1's next greater number is 2; 
The number 2 can't find next greater number. 
The second 1's next greater number needs to search circularly, which is also 2.
Example 2:

Input: nums = [1,2,3,4,3]
Output: [2,3,4,-1,4]
*/
