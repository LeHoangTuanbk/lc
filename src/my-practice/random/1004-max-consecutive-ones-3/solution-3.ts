export function longestOnes(nums: number[], k: number): number {
  let prefix = [0];
  for (let num of nums) {
    prefix.push(prefix.at(-1) + Number(!num));
  }
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    let left = i,
      right = nums.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let zeros = prefix[mid + 1] - prefix[i];
      if (zeros <= k) {
        maxLen = Math.max(maxLen, mid - i + 1);
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return maxLen;
}
