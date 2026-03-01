export class NumArray {
  private tree: number[];
  private nums: number[];
  private n: number;
  constructor(nums: number[]) {
    this.n = nums.length;
    this.nums = nums;
    this.tree = Array(this.n + 1).fill(0);
    for (let i = 0; i < this.n; i++) {
      this.internalUpdate(i + 1, nums[i]);
    }
  }

  private internalUpdate(i: number, delta: number) {
    while (i <= this.n) {
      this.tree[i] += delta;
      i += this.lowbit(i);
    }
  }

  private lowbit(x: number) {
    return x & -x;
  }

  query(i: number): number {
    let sum = 0;
    while (i > 0) {
      sum += this.tree[i];
      i -= this.lowbit(i);
    }
    return sum;
  }

  update(index: number, val: number): void {
    const delta = val - this.nums[index];
    this.nums[index] = val;
    this.internalUpdate(index + 1, delta);
  }

  sumRange(left: number, right: number): number {
    return this.query(right + 1) - this.query(left);
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
