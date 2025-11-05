export function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
  const jobs: [number, number, number][] = [];
  const n = startTime.length;

  for (let i = 0; i < n; i++) {
    jobs.push([endTime[i], startTime[i], profit[i]]);
  }
  jobs.sort((a, b) => a[0] - b[0]);

  // end time, profit
  const small: [number, number][] = [[0, 0]];
  for (const [end, start, profit] of jobs) {
    const i = lowerBound(small, start) - 1;
    const newProfit = (i >= 0 ? small[i][1] : 0) + profit;
    if (newProfit > small.at(-1)[1]) {
      small.push([end, newProfit]);
    }
  }

  return small.at(-1)[1];
}

function lowerBound(nums: [number, number][], target: number): number {
  let lo = 0,
    hi = nums.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid][0] <= target) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}

// Chat nhi phan
const startTime = [1, 2, 3, 3],
  endTime = [3, 4, 5, 6],
  profit = [50, 10, 40, 70];
console.log(jobScheduling(startTime, endTime, profit));
