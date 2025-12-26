export function minMoves2(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  const median = nums[Math.floor(n / 2)];
  let res = 0;
  for (const num of nums) {
    res += Math.abs(num - median);
  }
  return res;
}

const nums = [1, 0, 0, 8, 6];
console.log(minMoves2(nums));
/* 
Example 1:

Input: nums = [1,2,3]
Output: 2
Explanation:
Only two moves are needed (remember each move increments or decrements one element):
[1,2,3]  =>  [2,2,3]  =>  [2,2,2]
Example 2:

Input: nums = [1,10,2,9]
Output: 16

*/
function uncommonFromSentences(s1: string, s2: string): string[] {
  const map = new Map<string, number>();
  const combineString = s1.split(' ').concat(s2.split(' '));
  for (const word of combineString) {
    map.set(word, (map.get(word) ?? 0) + 1);
  }
  return [...map.entries()].filter((item) => item[1] !== 1).map((item) => item[0]);
}
