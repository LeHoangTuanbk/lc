export function canJump(nums: number[]): boolean {
  const n = nums.length;

  let maxCanJump = 0;
  for (let i = 0; i < n - 1; i++) {
    if (i > maxCanJump) return false;
    maxCanJump = Math.max(maxCanJump, i + nums[i]);
  }
  return true;
}

const nums = [1, 0, 1, 0];
console.log(canJump(nums));
/* 

Example 1:


nums =
[1,0,1,0]

Use Testcase
Output
true
Expected
false


Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,3,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
*/
