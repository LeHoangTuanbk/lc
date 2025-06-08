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

  while0
}

export function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[0] - b[0]);
  let last = -1e9;
  let res = 0;
  for(const interval of intervals) {
    if(interval[0] >= last) {
      last = interval[1]
    } else {
      res++;
      last = Math.min(last, interval[1])
    }
  }
  return res;
};


export function eraseOverlapIntervals1(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1]);
  let last = -1e9;
  let res = 0;
  for(const interval of intervals) {
    if(interval[0] >= last) {
      last = interval[1]
    } else {
      res++;
    }
  }
  return res;
};