export function countPairsPowerOfTwo(nums: number[]) {
  let res = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (nums[i] + nums[j] > 0 && Math.log2(nums[i] + nums[j]) % 1 === 0) {
        res++;
      }
    }
  }
  return res;
}

console.log(countPairsPowerOfTwo([1, -1, 2, 3]));
