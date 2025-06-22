export class NumArray {
  private prefixSum: number[] = [];
  constructor(nums: number[]) {
    this.prefixSum = [...nums];
    for (let i = 1; i < nums.length; i++) {
      this.prefixSum[i] = nums[i] + this.prefixSum[i - 1];
    }
  }

  sumRange(left: number, right: number): number {
    if (left === 0) return this.prefixSum[right];
    return this.prefixSum[right] - this.prefixSum[left - 1];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
