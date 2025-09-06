// export function maximumCount2(nums: number[]): number {
//   let negativeCount = 0,
//     positiveCount = 0;
//   for (const num of nums) {
//     if (num < 0) negativeCount++;
//     if (num > 0) positiveCount++;
//   }
//   return negativeCount > positiveCount ? negativeCount : positiveCount;
// }

export function maximumCount(nums: number[]): number {
  const n = nums.length;
  // find biggest index < 0
  const numberOfNegative = findLastIndexLessThan(nums, 0) + 1;
  // find biggest index > 0
  const numberOfPositive = n - findFirstIndexGreaterThan(nums, 0); // 3 - 1
  return Math.max(numberOfNegative, numberOfPositive);
}

function findLastIndexLessThan(nums: number[], target: number): number {
  // nums = [-2,-1,-1,0,1,2,3]
  // target = 0, index = 3 => res = 2
  let low = 0,
    high = nums.length,
    res = -1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (nums[mid] < target) {
      low = mid + 1;
      res = mid;
    } else {
      high = mid - 1;
    }
  }
  return res;
}

function findFirstIndexGreaterThan(nums: number[], target: number): number {
  let low = 0,
    high = nums.length,
    res = nums.length;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (nums[mid] > target) {
      high = mid - 1;
      res = mid;
    } else {
      low = mid + 1;
    }
  }
  return res;
}

const nums = [-2, -1, -1, 0, 1, 2, 3];
console.log(findLastIndexLessThan(nums, 0));
console.log(findFirstIndexGreaterThan(nums, 0));
console.log(maximumCount(nums));
/* 
Example 1:

0 1 2 3
Input: nums = [-2,-1,-1,0,1,2,3]
Output: 3
Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.
Example 2:

Input: nums = [-3,-2,-1,0,0,1,2]
Output: 3
Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.
Example 3:

Input: nums = [5,20,66,1314]
Output: 4
Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.

*/



function postorder(node: TreeNode | null, nums: number[]) {
    if(!node) return;
    postorder(node.left, nums);
    postorder(node.right, nums);
    nums.push(node.val);  
}

function postorderTraversal(root: TreeNode | null): number[] {
    const nums: [] = [];
    postorder(root, nums);
    return nums;
};
