function isOverLap(A: number[], B: number[]) {
  return A[1] >= B[0] && A[0] <= B[1];
}

function mergeInterval(A: number[], B: number[]) {
  if (!isOverLap(A, B)) {
    throw new Error('Can not merge');
  }
  return [Math.min(A[0], B[0]), Math.max(A[1], B[1])];
}

function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  let res: number[][] = [];
  let curInterval: number[] = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (isOverLap(curInterval, intervals[i])) {
      curInterval = mergeInterval(curInterval, intervals[i]);
    } else {
      res.push([...curInterval]);
      curInterval = intervals[i];
    }
  }
  res.push([...curInterval]);
  return res;
}

/* 
Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Input: intervals = [[1,3],[2,9],[8,10],[15,18]]
Output: [[1,10],[15,18]]


Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.


*/
