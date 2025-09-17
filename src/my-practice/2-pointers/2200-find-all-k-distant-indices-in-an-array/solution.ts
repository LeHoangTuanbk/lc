export function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  const n = nums.length;
  const keyIndices: number[] = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] === key) {
      keyIndices.push(i);
    }
  }
  const m = keyIndices.length;
  let i = 0,
    j = 0;
  const res: number[] = [];
  while (i < n && j < m) {
    if (Math.abs(i - keyIndices[j]) <= k) {
      res.push(i);
    }
    i++;
    if (i - keyIndices[j] > k) {
      j++;
    }
  }
  return res;
}

const nums = [3, 4, 9, 1, 3, 9, 5],
  key = 9,
  k = 1;
console.log(findKDistantIndices(nums, key, k));

/* 
Example 1:

Input: nums = [3,4,9,1,3,9,5], key = 9, k = 1
Output: [1,2,3,4,5,6]
Explanation: Here, nums[2] == key and nums[5] == key.
- For index 0, |0 - 2| > k and |0 - 5| > k, so there is no j where |0 - j| <= k and nums[j] == key. Thus, 0 is not a k-distant index.
- For index 1, |1 - 2| <= k and nums[2] == key, so 1 is a k-distant index.
- For index 2, |2 - 2| <= k and nums[2] == key, so 2 is a k-distant index.
- For index 3, |3 - 2| <= k and nums[2] == key, so 3 is a k-distant index.
- For index 4, |4 - 5| <= k and nums[5] == key, so 4 is a k-distant index.
- For index 5, |5 - 5| <= k and nums[5] == key, so 5 is a k-distant index.
- For index 6, |6 - 5| <= k and nums[5] == key, so 6 is a k-distant index.
Thus, we return [1,2,3,4,5,6] which is sorted in increasing order.

*/
