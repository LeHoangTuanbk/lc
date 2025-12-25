function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
  const n = profit.length;
  const jobs: [number, number][] = [];
  for (let i = 0; i < n; i++) {
    jobs.push([difficulty[i], profit[i]]);
  }
  jobs.sort((a, b) => a[0] - b[0]);
  worker.sort((a, b) => a - b);

  let maxProfit = 0;
  let best = 0,
    i = 0;
  for (const w of worker) {
    while (i < n && jobs[i][0] <= w) {
      best = Math.max(best, jobs[i][1]);
      i++;
    }
    maxProfit += best;
  }
  return maxProfit;
}
