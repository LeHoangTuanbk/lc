export class Fenwick {
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

  range(l: number, r: number): number {
    return this.query(r) - this.query(l - 1);
  }
}

const bit = new Fenwick(5);

bit.update(1, 1);
bit.update(2, 2);
bit.update(3, 3);
bit.update(4, 4);
bit.update(5, 5);
console.log(bit.range(1, 3)); // 6
console.log(bit.range(2, 5)); // 14
console.log(7 & -7);
