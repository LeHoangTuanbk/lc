function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
  const n = profit.length,
    m = worker.length;
  const jobs: [number, number][] = [];
  for (let i = 0; i < n; i++) {
    jobs.push([difficulty[i], profit[i]]);
  }
  jobs.sort((a, b) => a[0] - b[0]);

  const best: number[] = Array(n);
  best[0] = jobs[0][1];
  for (let i = 1; i < n; i++) {
    best[i] = Math.max(best[i - 1], jobs[i][1]);
  }

  let maxProfit = 0;
  for (const w of worker) {
    let l = 0,
      r = n - 1,
      idx = -1;

    while (l <= r) {
      const mid = (l + r) >> 1;
      if (jobs[mid][0] <= w) {
        idx = mid;
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    if (idx !== -1) maxProfit += best[idx];
  }
  return maxProfit;
}
