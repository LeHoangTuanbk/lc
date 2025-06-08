const START = 0;
const END = 1;

export type Interval = [number, number];
export function canAttend(intervals: Interval[]) {
  intervals.sort((a, b) => a[START] - b[START]);

  for (let i = 0; i < intervals.length - 1; i++) {
    const curInterval = intervals[i];
    const nexInterval = intervals[i + 1];
    if (curInterval[END] > nexInterval[START]) {
      return false;
    }
  }

  return true;
}

const intervals: Interval[] = [
  [7, 10],
  [2, 4],
];

console.log(canAttend(intervals));

/* 
Example 1:

Input: [[0,30],[5,10],[15,20]]
Output: false

Example 2:

Input: [[7,10],[2,4]]
Output: true

*/
