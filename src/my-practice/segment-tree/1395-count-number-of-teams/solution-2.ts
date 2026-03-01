class Fenwick {
  tree: number[];
  n: number;

  constructor(n: number) {
    this.n = n;
    this.tree = new Array(n + 1).fill(0);
  }

  lowbit(x: number) {
    return x & -x;
  }

  update(i: number, delta: number) {
    while (i <= this.n) {
      this.tree[i] += delta;
      i += this.lowbit(i);
    }
  }

  query(i: number) {
    let sum = 0;
    while (i > 0) {
      sum += this.tree[i];
      i -= this.lowbit(i);
    }
    return sum;
  }
}

export function numTeams(rating: number[]): number {
  const n = rating.length;
  const sorted = [...rating].sort((a, b) => a - b);
  const rank = new Map<number, number>();
  sorted.forEach((val, i) => {
    rank.set(val, i + 1);
  });

  const leftBIT = new Fenwick(n);
  const rightBIT = new Fenwick(n);

  for (let r of rating) {
    rightBIT.update(rank.get(r), 1);
  }

  let ans = 0;

  for (let j = 0; j < n; j++) {
    const r = rank.get(rating[j]);
    rightBIT.update(r, -1);

    const leftSmall = leftBIT.query(r - 1);
    const rightSmall = rightBIT.query(r - 1);

    const leftBig = j - leftSmall;
    const rightBig = n - 1 - j - rightSmall;

    ans += leftSmall * rightBig + leftBig * rightSmall;

    leftBIT.update(r, 1);
  }

  return ans;
}
