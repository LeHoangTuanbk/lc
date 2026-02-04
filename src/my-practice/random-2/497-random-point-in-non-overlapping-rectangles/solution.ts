export class Solution {
  private rects: number[][];
  private prefix: number[];
  private total: number;

  constructor(rects: number[][]) {
    this.rects = rects;
    this.prefix = [];
    let sum = 0;

    for (const [x1, y1, x2, y2] of rects) {
      const count = (x2 - x1 + 1) * (y2 - y1 + 1);
      sum += count;
      this.prefix.push(sum);
    }

    this.total = sum;
  }

  pick(): number[] {
    const k = Math.floor(Math.random() * this.total);

    let l = 0,
      r = this.prefix.length - 1;
    while (l < r) {
      const mid = (l + r) >> 1;
      if (this.prefix[mid] > k) r = mid;
      else l = mid + 1;
    }

    const [x1, y1, x2, y2] = this.rects[l];
    const base = l === 0 ? 0 : this.prefix[l - 1];
    const offset = k - base;

    const width = x2 - x1 + 1;
    const dx = offset % width;
    const dy = Math.floor(offset / width);

    return [x1 + dx, y1 + dy];
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */
