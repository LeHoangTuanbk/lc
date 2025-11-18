export function maximumOr(nums: number[], k: number): number {
  const n = nums.length;

  const bigNums = nums.map((num) => BigInt(num));
  const bigK = BigInt(k);

  const prefix = new Array(n + 1).fill(0n);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] | bigNums[i];
  }

  const suffix = new Array(n + 1).fill(0n);
  for (let i = n - 1; i >= 0; i--) {
    suffix[i] = suffix[i + 1] | bigNums[i];
  }

  let maxOr = 0n;

  for (let i = 0; i < n; i++) {
    const multiplied = bigNums[i] << bigK;
    const currentOR = prefix[i] | multiplied | suffix[i + 1];
    if (currentOR > maxOr) {
      maxOr = currentOR;
    }
  }
  return Number(maxOr);
}
/* 
Example 1:

Input: nums = [12,9], k = 1
maxNumsIdx = i
Output: 30
Explanation: If we apply the operation to index 1, our new array nums will be equal to [12,18]. Thus, we return the bitwise or of 12 and 18, which is 30.
Example 2:

Input: nums = [8,1,2], k = 2
Output: 35
Explanation: If we apply the operation twice on index 0, we yield a new array of [32,1,2]. Thus, we return 32|1|2 = 35.

*/

const nums = [12, 9],
  k = 1;
console.log(maximumOr(nums, k));
