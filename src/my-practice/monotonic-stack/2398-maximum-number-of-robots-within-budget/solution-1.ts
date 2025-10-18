export function maximumRobots(
  chargeTimes: number[],
  runningCosts: number[],
  budget: number,
): number {
  const n = chargeTimes.length;
  let left = 0;
  let sumRun = 0;
  const deque: number[] = [];
  let ans = 0;

  for (let right = 0; right < n; right++) {
    const c = chargeTimes[right];
    const r = runningCosts[right];
    sumRun += r;

    while (deque.length && chargeTimes[deque.at(-1)] <= c) {
      deque.pop();
    }
    deque.push(right);

    while (deque.length && chargeTimes[deque[0]] + (right - left + 1) * sumRun > budget) {
      if (deque[0] === left) deque.shift();
      sumRun -= runningCosts[left];
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}

const chargeTimes = [3, 6, 1, 3, 4],
  runningCosts = [2, 1, 3, 4, 5],
  budget = 25;

console.log(maximumRobots(chargeTimes, runningCosts, budget));
