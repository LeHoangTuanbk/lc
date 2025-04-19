function productExceptSelf(nums: number[]): number[] {
  const lengthOfNums = nums.length;
  let ans: number[] = new Array(lengthOfNums).fill(1);
  let prefixProduct = 1;
  for (let i = 0; i < lengthOfNums; i++) {
    ans[i] = prefixProduct * ans[i];
    prefixProduct *= nums[i];
  }
  console.log(ans);

  let suffixProduct = 1;
  for (let i = lengthOfNums - 1; i >= 0; i--) {
    ans[i] = ans[i] * suffixProduct;
    suffixProduct *= nums[i];
  }
  console.log(ans);
  return ans;
}

productExceptSelf([1, 2, 3, 4]);
