export function insert(intervals: number[][], newInterval: number[]): number[][] {
  const n = intervals.length;
  const i = 0;
  const res: number[][] = [];
  while (i < n && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i]);
  }

  while( i < n && intervals[i][0] <= intervals[1]) {
    new
  }

  while()
}