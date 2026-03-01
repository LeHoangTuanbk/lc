export class SegmentTree {
  private tree: number[];
  private n: number;

  constructor(private nums: number[]) {
    this.n = nums.length;
    this.tree = new Array(4 * this.n).fill(0);
    this.build(1, 0, this.n - 1);
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

  update(v: number, l: number, r: number, pos: number, val: number): void {
    if (l === r) {
      this.tree[v] = val;
      return;
    }

    const mid = (l + r) >> 1;

    if (pos <= mid) {
      this.update(2 * v, l, mid, pos, val);
    } else {
      this.update(2 * v + 1, mid + 1, r, pos, val);
    }

    this.tree[v] = this.tree[2 * v] + this.tree[2 * v + 1];
  }
}

const seg = new SegmentTree([1, 2, 3, 4, 5]);

console.log(seg.query(1, 0, 4, 1, 3)); // 2+3+4 = 9

seg.update(1, 0, 4, 2, 10);

console.log(seg.query(1, 0, 4, 1, 3)); // 2+10+4 = 16
