function find132pattern(nums: number[]): boolean {
  // Solution 1: Iterate each item -> find lower left and right => return : O(n^2)
  // Solution 2:
  // num[i] < num[k] <  num[j], i < j < k;
  const n = nums.length;
  const stack: number[] = [];
  let second = -Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] < second) return true;

    while (stack.length && stack.at(-1) < nums[i]) {
      second = stack.pop();
    }

    stack.push(nums[i]);
  }

  return false;
}
/* 

Example 1:

Input: nums = [1,7,6,5,4,9] stack = [9,7], second = 6
Output: false
Explanation: There is no 132 pattern in the sequence.
Example 2:

Input: nums = [3,1,4,2]
n = 4
stack = []
second = -Inf


step 0: i = 3
stack = [2]

Step 1: i = 2
second = 2 => nums[k] exists
stack = [4] => nums[j] exists

Step 2: i = 1
num[1] = 1
return true;

second = stack.pop() = 3
stack = [4] : => nums[k] = 3
num[j] = 4


Output: true
Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
Example 3:

Input: nums = [-1,3,2,0]
Output: true
Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].

*/
