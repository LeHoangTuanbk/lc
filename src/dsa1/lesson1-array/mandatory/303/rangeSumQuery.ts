class NumArray {
  private accumulativeSum: number[] = Array(1000);
  constructor(nums: number[]) {
    this.accumulativeSum[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
      this.accumulativeSum[i] = this.accumulativeSum[i - 1] + nums[i];
    }
  }

  sumRange(left: number, right: number): number {
    if (left == 0) return this.accumulativeSum[right];
    return this.accumulativeSum[right] - this.accumulativeSum[left - 1];
  }
}
