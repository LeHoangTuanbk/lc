export function findMinDifference(timePoints: string[]): number {
  const times: number[] = [];
  const MINUTES_IN_DAY = 60 * 24;
  for (const timePoint of timePoints) {
    const timeArr = timePoint.split(':');
    times.push(60 * Number(timeArr[0]) + Number(timeArr[1]));
  }

  const n = times.length;
  let minDiff = Infinity;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == j) continue;
      minDiff = Math.min(minDiff, (times[i] - times[j] + MINUTES_IN_DAY) % MINUTES_IN_DAY);
    }
  }
  return minDiff;
}
const timePoints = ['23:59', '00:00'];
console.log(findMinDifference(timePoints));
