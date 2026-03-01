export class NumArray {
  private tree: number[];
  private n: number;

  constructor(private nums: number[]) {
    this.n = nums.length;
    this.tree = new Array(4 * this.n).fill(0);
    this.build(1, 0, this.n - 1);
  }

  update(index: number, val: number): void {
    return this.internalUpdate(1, 0, this.n - 1, index, val);
  }

  private build(v: number, l: number, r: number): void {
    if (l === r) {
      this.tree[v] = this.nums[l];
      return;
    }
    const mid = (l + r) >> 1;
    this.build(2 * v, l, mid);
    this.build(2 * v + 1, mid + 1, r);

    this.tree[v] = this.tree[2 * v] + this.tree[2 * v + 1];
  }

  internalUpdate(v: number, l: number, r: number, pos: number, val: number): void {
    if (l === r) {
      this.tree[v] = val;
      return;
    }

    const mid = (l + r) >> 1;

    if (pos <= mid) {
      this.internalUpdate(2 * v, l, mid, pos, val);
    } else {
      this.internalUpdate(2 * v + 1, mid + 1, r, pos, val);
    }

    this.tree[v] = this.tree[2 * v] + this.tree[2 * v + 1];
  }

  query(v: number, l: number, r: number, ql: number, qr: number) {
    if (ql > r || qr < l) return 0;

    if (ql == l && qr == r) {
      return this.tree[v];
    }

    const mid = (l + r) >> 1;
    return (
      this.query(2 * v, l, mid, ql, Math.min(qr, mid)) +
      this.query(2 * v + 1, mid + 1, r, Math.max(ql, mid + 1), qr)
    );
  }

  sumRange(left: number, right: number): number {
    return this.query(1, 0, this.n - 1, left, right);
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
