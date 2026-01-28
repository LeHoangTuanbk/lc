export function findMinDifference(timePoints: string[]): number {
  const MINUTES_IN_DAY = 60 * 24;
  const times: number[] = timePoints.map((t) => {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
  });
  times.sort((a, b) => a - b);
  let minDiff = MINUTES_IN_DAY;

  for (let i = 1; i < times.length; i++) {
    minDiff = Math.min(minDiff, times[i] - times[i - 1]);
  }

  minDiff = Math.min(minDiff, times[0] + MINUTES_IN_DAY - times.at(-1));
  return minDiff;
}
const timePoints = ['23:59', '00:00'];
console.log(findMinDifference(timePoints));
