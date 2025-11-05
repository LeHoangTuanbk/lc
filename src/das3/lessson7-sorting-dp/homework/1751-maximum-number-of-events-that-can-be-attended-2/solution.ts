export function maxValue(events: number[][], k: number): number {
  const n = events.length;
  events.sort((a, b) => a[1] - b[1]);
  const ends = events.map((e) => e[1]);
  const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const [start, end, value] = events[i - 1];
    let p = lowerBound(ends, start) - 1;
    for (let j = 1; j <= k; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[p + 1][j - 1] + value);
    }
  }

  return dp[n][k];
}

function lowerBound(arr: number[], target: number): number {
  let lo = 0,
    hi = arr.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] >= target) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }

  return lo;
}

const events = [
    [1, 2, 4],
    [3, 4, 3],
    [2, 3, 1],
  ],
  k = 2;
console.log(maxValue(events, k));
/* 
Input: events = [[1,2,4],[3,4,3],[2,3,1]], k = 2
Output: 7
Explanation: Choose the green events, 0 and 1 (0-indexed) for a total value of 4 + 3 = 7.


Input: events = [[1,2,4],[3,4,3],[2,3,10]], k = 2
Output: 10
Explanation: Choose event 2 for a total value of 10.
Notice that you cannot attend any other event as they overlap, and that you do not have to attend k events.

Input: events = [[1,1,1],[2,2,2],[3,3,3],[4,4,4]], k = 3
Output: 9
Explanation: Although the events do not overlap, you can only attend 3 events. Pick the highest valued three.

*/
// TODO: reduce memory of dp
