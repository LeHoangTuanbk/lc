function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const res: number[] = [];
  for (const interval of intervals) {
    if (!res.length || interval[0] > res[res.length - 1][1]) {
      res.push(interval);
    } else {
      res.push();
    }
  }
}

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


export function findMinArrowShots(points: number[][]): number {
  let last = -Infinity;
  let res = 0;
  points.sort((a,b) =>a[0]-b[0]);
  for(const point of points) {
    if(point[0] > last) {
      res++;
      last = point[1]
    }
    else {
      last = Math.min(last, point[1])
    }
  }
  return res;
};


/* 
Example 1:

Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
Example 2:

Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
Example 3:

Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping. */
/* 
Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

*/
