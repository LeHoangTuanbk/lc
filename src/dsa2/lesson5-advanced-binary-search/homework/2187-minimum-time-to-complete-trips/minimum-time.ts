export function minimumTime(time: number[], totalTrips: number): number {
  let lo = 1,
    hi = totalTrips * Math.min(...time),
    res = 0;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (canFinishTotalTrips(time, totalTrips, mid)) {
      res = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return res;
}

function canFinishTotalTrips(busTime: number[], totalTrips: number, time: number) {
  let currentTotalTrips = 0;
  for (let timeUnit of busTime) {
    currentTotalTrips += Math.floor(time / timeUnit);
  }
  return currentTotalTrips >= totalTrips;
}

const time = [5, 10, 10],
  totalTrips = 9;
console.log(minimumTime(time, totalTrips));

/* 
Example 1:

Input: time = [1,2,3], totalTrips = 5
Output: 3
Explanation:
- At time t = 1, the number of trips completed by each bus are [1,0,0]. 
  The total number of trips completed is 1 + 0 + 0 = 1.
- At time t = 2, the number of trips completed by each bus are [2,1,0]. 
  The total number of trips completed is 2 + 1 + 0 = 3.
- At time t = 3, the number of trips completed by each bus are [3,1,1]. 
  The total number of trips completed is 3 + 1 + 1 = 5.
So the minimum time needed for all buses to complete at least 5 trips is 3.
Example 2:

Input: time = [2], totalTrips = 1
Output: 2
Explanation:
There is only one bus, and it will complete its first trip at t = 2.
So the minimum time needed to complete 1 trip is 2.

1 <= time.length <= 10^5
1 <= time[i], totalTrips <= 107

*/
