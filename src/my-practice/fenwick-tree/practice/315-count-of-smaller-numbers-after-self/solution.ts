class Fenwick {
  private tree: number[];
  private n: number;

  constructor(n: number) {
    this.n = n;
    this.tree = new Array(n + 1).fill(0);
  }

  private lowbit(x: number): number {
    return x & -x;
  }

  update(i: number, delta: number): void {
    while (i <= this.n) {
      this.tree[i] += delta;
      i += this.lowbit(i);
    }
  }

  query(i: number): number {
    let sum = 0;
    while (i > 0) {
      sum += this.tree[i];
      i -= this.lowbit(i);
    }
    return sum;
  }
}

export function countSmaller(nums: number[]): number[] {
  const n = nums.length;
  const res = new Array(n).fill(0);

  const sorted = Array.from(new Set(nums)).sort((a, b) => a - b);
  const rank = new Map<number, number>();
  sorted.forEach((val, i) => {
    rank.set(val, i + 1);
  });

  const bit = new Fenwick(sorted.length);
  for (let i = n - 1; i >= 0; i--) {
    const r = rank.get(nums[i]);
    res[i] = bit.query(r - 1);
    bit.update(r, 1);
  }
  return res;
}
