function findRightInterval(intervals: number[][]): number[] {
  // [start, end, idx]
  const intervalsIdx = intervals.map((val, idx) => [...val, idx]);
  intervalsIdx.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  const n = intervals.length;
  let res: number[] = Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    const [start, end] = intervals[i];
    let left = 0,
      right = n;
    while (left < right) {
      const mid = (left + right) >> 1;
      const startJ = intervalsIdx[mid][0];
      if (startJ >= end) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    if (right != n) res[i] = intervalsIdx[right][2];
  }
  return res;
}

const intervals = [
  [3, 4],
  [2, 3],
  [1, 2],
];
console.log(findRightInterval(intervals));
