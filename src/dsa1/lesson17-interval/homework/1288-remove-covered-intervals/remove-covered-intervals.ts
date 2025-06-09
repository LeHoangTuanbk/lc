const START = 0;
const END = 1;
export function removeCoveredIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => {
    if (a[START] == b[START]) return b[END] - a[END];
    return a[START] - b[START];
  });

  let numberOfCoveredIntervals = 0;
  let currentEnd = -Infinity;

  for (const [start, end] of intervals) {
    if (end > currentEnd) {
      currentEnd = end;
      // numberOfRemainingItem++;
    } else {
      numberOfCoveredIntervals++;
    }
  }

  return intervals.length - numberOfCoveredIntervals;
}
/* 

Example 0:
intervals =
[[1,2],[1,4],[3,4]]



Example 1:

Input: intervals = [[1,4],[3,6],[2,8]]

[[1,4], [2,8], [3,6], [10, 17], [11, 14]]

Step 1: currentEnd = 4
Step 2: currentEnd = 8; numberOfCoveredIntervals = 0
Step 3: currentEnd = 8, numberOfCoveredIntervals = 1
Step 4: currentEnd = 17, numberOfCoveredIntervals = 1
Step 5: currentEnd = 17, numberOfCoveredIntervals = 2

return 3: 

Output: 2
Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.
Example 2:

Input: intervals = [[1,4],[2,3]]
Output: 1




*/
