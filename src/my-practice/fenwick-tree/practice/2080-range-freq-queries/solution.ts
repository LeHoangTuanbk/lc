class RangeFreqQuery {
  private pos: Map<number, number[]>;
  constructor(arr: number[]) {
    this.pos = new Map();
    for (let i = 0; i < arr.length; i++) {
      if (!this.pos.has(arr[i])) {
        this.pos.set(arr[i], []);
      }
      this.pos.get(arr[i]).push(i);
    }
  }

  query(left: number, right: number, value: number): number {
    const arr = this.pos.get(value);
    if (!arr) return 0;

    const l = this.lowerBound(arr, left);
    const r = this.upperBound(arr, right);

    return r - l;
  }

  private lowerBound(arr: number[], target: number): number {
    let l = 0,
      r = arr.length;
    while (l < r) {
      const mid = (l + r) >> 1;
      if (arr[mid] < target) l = mid + 1;
      else r = mid;
    }
    return l;
  }

  private upperBound(arr: number[], target: number): number {
    let l = 0,
      r = arr.length;
    while (l < r) {
      const mid = (l + r) >> 1;
      if (arr[mid] <= target) l = mid + 1;
      else r = mid;
    }

    return l;
  }
}

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */
