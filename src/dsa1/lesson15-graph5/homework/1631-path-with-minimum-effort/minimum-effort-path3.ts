class MinHeap<T> {
  private heap: T[] = [];
  constructor(private compare: (a: T, b: T) => number) {}

  push(val: T) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop(): T | undefined {
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length && last !== undefined) {
      this.heap[0] = last;
      this.bubbleDown();
    }
    return top;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  private bubbleUp() {
    let i = this.heap.length - 1;
    const val = this.heap[i];
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.compare(val, this.heap[parent]) >= 0) break;
      this.heap[i] = this.heap[parent];
      i = parent;
    }
    this.heap[i] = val;
  }

  private bubbleDown() {
    let i = 0;
    const val = this.heap[i];
    const n = this.heap.length;
    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;
      if (left < n && this.compare(this.heap[left], this.heap[smallest]) < 0) smallest = left;
      if (right < n && this.compare(this.heap[right], this.heap[smallest]) < 0) smallest = right;
      if (smallest === i) break;
      this.heap[i] = this.heap[smallest];
      i = smallest;
    }
    this.heap[i] = val;
  }
}

const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

export function minimumEffortPath(heights: number[][]): number {
  const m = heights.length;
  const n = heights[0].length;
  const effort: number[][] = Array.from({ length: m }, () => Array(n).fill(Infinity));
  const heap = new MinHeap<[number, number, number]>((a, b) => a[0] - b[0]); // [effort, x, y]

  effort[0][0] = 0;
  heap.push([0, 0, 0]);

  while (!heap.isEmpty()) {
    const [curEffort, x, y] = heap.pop()!;
    if (x === m - 1 && y === n - 1) return curEffort;

    for (const [dx, dy] of dirs) {
      const nx = x + dx,
        ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;

      const diff = Math.abs(heights[x][y] - heights[nx][ny]);
      const nextEffort = Math.max(curEffort, diff);
      if (nextEffort < effort[nx][ny]) {
        effort[nx][ny] = nextEffort;
        heap.push([nextEffort, nx, ny]);
      }
    }
  }

  return -1;
}
