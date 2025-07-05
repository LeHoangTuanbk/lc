export class NumArray {
  private prefixSum: number[] = [];
  constructor(nums: number[]) {
    const n = nums.length;
    this.prefixSum = Array(n).fill(0);
    for (let i = 1; i <= n; i++) {
      this.prefixSum[i] = nums[i - 1] + this.prefixSum[i - 1];
    }
  }

  sumRange(left: number, right: number): number {
    return this.prefixSum[right + 1] - this.prefixSum[left];
  }
}
