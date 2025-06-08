function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[0] - b[0]);
  let res = 0;
  let last = -Infinity;
  for (const p of points) {
    if (last < p[0]) {
      res++;
      last = p[1];
    } else {
      last = Math.min(last, p[1]);
    }
  }
  return res;
}

/* 
Example 1:

Input: points = [[10,16],[2,8],[1,6],[7,12]]
Output: 2

[1,6], [2,8], [7,12], [10,16]

[1,6], [2,8], [3, 4], [7,12], [10,16]

[1,6] : res = 1, last = 6
[2,8] : res = 1, last = 6
[3,4] : res = 1, last = 4
[7, 12] : res = 2, last = 12
[10, 16] : res = 2, last = 12

Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
- Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].
Example 2:

Input: points = [[1,2],[3,4],[5,6],[7,8]]
Output: 4
Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.
Example 3:

Input: points = [[1,2],[2,3],[3,4],[4,5]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
- Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5]. 


[[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]]
*/

// Minimum clique problem
const START = 0;
const END = 1;

function clusterIntervals(intervals: number[][]): number[][][] {
  intervals.sort((a, b) => a[START] - b[START]);
  const results: number[][][] = [];
  let group: number[][] = [];
  let currentEnd = Infinity;

  for (const interval of intervals) {
    const [start, end] = interval;
    if (start > currentEnd) {
      results.push([...group]);
      group = [interval];
      currentEnd = end;
    } else {
      group.push(interval);
      currentEnd = Math.min(currentEnd, end);
    }
  }

  if (group.length) {
    results.push(group);
  }
  return results;
}

console.log(
  clusterIntervals([
    [1, 6],
    [2, 8],
    [3, 4],
    [7, 12],
    [10, 16],
  ]),
);
