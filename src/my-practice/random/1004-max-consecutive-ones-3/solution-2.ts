// TLE
export function longestOnes(nums: number[], k: number): number {
  let prefix = [0];
  for (let num of nums) {
    prefix.push(prefix.at(-1) + Number(!num));
  }
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let zeros = prefix[j + 1] - prefix[i];
      if (zeros <= k) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }
  return maxLen;
}
