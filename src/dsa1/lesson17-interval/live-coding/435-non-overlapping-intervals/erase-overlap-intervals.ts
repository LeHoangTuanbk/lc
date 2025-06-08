const START = 0;
const END = 1;

export function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[START] - b[START]);
  let res: number = 0;
  let currentEnd = -Infinity;

  for (const interval of intervals) {
    const [start, end] = interval;
    if (currentEnd <= start) {
      currentEnd = end;
    } else {
      currentEnd = Math.min(currentEnd, end);
      res++;
    }
  }

  return res;
}
/* 
Example 1:

Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1

[[1,2],[1,5],[2,3],[3,4]]

Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
Example 2:

Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
Example 3:

Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 */

export function eraseOverlapIntervals1(intervals: number[][]): number {
  intervals.sort((a, b) => a[END] - b[END]);
  let res: number = 0;
  let currentEnd = -Infinity;

  for (const interval of intervals) {
    const [start, end] = interval;
    if (currentEnd <= start) {
      currentEnd = end;
    } else {
      res++;
    }
  }
  return res;
}

/* 
[[1,2],[1,5],[2,3],[3,4]]

[1,2], [2,3], [3,4], [1,5]

1. last = 2
2. [2,3]  : 2>= last, last = 3
3. .. last = 4
4. last > interval: res++ = 1;

*/
