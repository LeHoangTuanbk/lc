const START = 0;
const END = 1;

export function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[START] - b[START]);
  const res: number[][] = [];
  let currentEnd = -Infinity;

  for (const interval of intervals) {
    const [start, end] = interval;

    if (!res.length || currentEnd < start) {
      res.push(interval);
      // If we need to find cluster overlap, can continue coding here
      // res.push(group)... group = []
    }

    currentEnd = Math.max(currentEnd, end);
    res[res.length - 1][END] = currentEnd;
  }

  return res;
}

/* 
Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/

type Interval = [number, number];

function groupNonOverlapping(intervals: Interval[]): Interval[][] {
  intervals.sort((a, b) => a[START] - b[START]);
  const res: Interval[][] = [];
  let currentEnd = -Infinity;
  let group: Interval[] = [];

  for (const interval of intervals) {
    const [start, end] = interval;

    if (currentEnd < start) {
      if (group.length) {
        res.push(group);
      }
      group = [interval];
    } else {
      group.push(interval);
    }
    currentEnd = Math.max(currentEnd, end);
  }
  res.push(group);

  return res;
}

const input: Interval[] = [
  [1, 3],
  [2, 5],
  [4, 7],
  [6, 8],
  [9, 10],
];
console.log(groupNonOverlapping(input));
