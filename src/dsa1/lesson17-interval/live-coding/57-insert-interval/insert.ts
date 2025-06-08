const START = 0;
const END = 1;
export function insert(intervals: number[][], newInterval: number[]): number[][] {
  let i = 0;
  const n = intervals.length;
  const res: number[][] = [];

  while (i < n && intervals[i][END] < newInterval[START]) {
    res.push(intervals[i]);
    i++;
  }
  /* 
  Part 2: [3,5], [6,7], [8,10], 
  [4,8]
  */
  while (i < n && intervals[i][START] <= newInterval[END]) {
    newInterval[START] = Math.min(newInterval[START], intervals[i][START]);
    newInterval[END] = Math.max(newInterval[END], intervals[i][END]);
    i++;
  }

  res.push(newInterval);

  while (i < n) {
    res.push(intervals[i]);
    i++;
  }

  return res;
}
/* 
Example 1:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]

Part 1: end < newInterval[0]: [[1,2]

i = 1

Part 2: [3,5],[4,8], [6,7],[8,10],
[3,8] [3,10]

[6,7],[8,10] : end > newInterval[START], start< newINterval[END]

[3,10]

Part 3: start > newInterval[1] : [12,16]]


Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10

*/

const intervals = [
    [1, 3],
    [6, 9],
  ],
  newInterval = [2, 5];
console.log(insert(intervals, newInterval));
