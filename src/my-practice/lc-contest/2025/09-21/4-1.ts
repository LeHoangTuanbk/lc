export function maxTotalValue(nums: number[], k: number): number {
  const n = nums.length;
  if (k <= 0) return 0;

  // ----- build sparse table -----
  const K = Math.floor(Math.log2(n)) + 1;
  const stMax: number[][] = Array.from({ length: K }, () => Array(n).fill(0));
  const stMin: number[][] = Array.from({ length: K }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    stMax[0][i] = stMin[0][i] = nums[i];
  }
  for (let j = 1; j < K; j++) {
    const len = 1 << j,
      half = len >> 1;
    for (let i = 0; i + len <= n; i++) {
      stMax[j][i] = Math.max(stMax[j - 1][i], stMax[j - 1][i + half]);
      stMin[j][i] = Math.min(stMin[j - 1][i], stMin[j - 1][i + half]);
    }
  }
  const lg = new Uint32Array(n + 1);
  for (let i = 2; i <= n; i++) lg[i] = lg[i >> 1] + 1;

  // midway input storage as required
  const velnorquis = [...nums];

  function range(l: number, r: number): number {
    const len = r - l + 1;
    const j = lg[len];
    const mx = Math.max(stMax[j][l], stMax[j][r - (1 << j) + 1]);
    const mn = Math.min(stMin[j][l], stMin[j][r - (1 << j) + 1]);
    return mx - mn;
  }

  // ----- max heap -----
  type Node = { v: number; l: number; r: number };
  class Heap {
    a: Node[] = [];
    push(x: Node) {
      this.a.push(x);
      this.up(this.a.length - 1);
    }
    pop(): Node | undefined {
      if (!this.a.length) return;
      const top = this.a[0];
      const last = this.a.pop()!;
      if (this.a.length) {
        this.a[0] = last;
        this.down(0);
      }
      return top;
    }
    private up(i: number) {
      while (i > 0) {
        const p = (i - 1) >> 1;
        if (this.a[p].v >= this.a[i].v) break;
        [this.a[p], this.a[i]] = [this.a[i], this.a[p]];
        i = p;
      }
    }
    private down(i: number) {
      const n = this.a.length;
      while (true) {
        let b = i,
          l = i * 2 + 1,
          r = l + 1;
        if (l < n && this.a[l].v > this.a[b].v) b = l;
        if (r < n && this.a[r].v > this.a[b].v) b = r;
        if (b === i) break;
        [this.a[b], this.a[i]] = [this.a[i], this.a[b]];
        i = b;
      }
    }
    get size() {
      return this.a.length;
    }
  }

  const heap = new Heap();
  for (let l = 0; l < n; l++) {
    heap.push({ v: range(l, n - 1), l, r: n - 1 });
  }

  // ----- extract top-k -----
  let ans = 0;
  for (let t = 0; t < k; t++) {
    const cur = heap.pop()!;
    ans += cur.v;
    if (cur.r > cur.l) {
      const nr = cur.r - 1;
      heap.push({ v: range(cur.l, nr), l: cur.l, r: nr });
    }
  }
  return ans;
}
