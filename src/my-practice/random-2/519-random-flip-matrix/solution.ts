class Solution {
  private m: number;
  private n: number;
  private total: number;
  private map: Map<number, number>;
  constructor(m: number, n: number) {
    this.m = m;
    this.n = n;
    this.total = m * n;
    this.map = new Map();
  }

  flip(): number[] {
    const r = Math.floor(Math.random() * this.total);
    const idx = this.map.get(r) ?? r;
    const last = this.total - 1;
    this.map.set(r, this.map.get(last) ?? last);
    this.total--;
    return [Math.floor(idx / this.n), idx % this.n];
  }

  reset(): void {
    this.total = this.m * this.n;
    this.map.clear();
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(m, n)
 * var param_1 = obj.flip()
 * obj.reset()
 */
