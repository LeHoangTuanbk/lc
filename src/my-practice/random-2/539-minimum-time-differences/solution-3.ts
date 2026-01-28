export function findMinDifference(timePoints: string[]): number {
  const MINUTES_IN_DAY = 60 * 24;
  const seen = Array<boolean>(MINUTES_IN_DAY).fill(false);
  for (const t of timePoints) {
    const [h, m] = t.split(':').map(Number);
    const minute = h * 60 + m;
    if (seen[minute]) return 0;
    seen[minute] = true;
  }

  let prev = -1,
    first = -1,
    minDiff = MINUTES_IN_DAY;
  for (let i = 0; i < MINUTES_IN_DAY; i++) {
    if (!seen[i]) continue;
    if (prev !== -1) {
      minDiff = Math.min(minDiff, i - prev);
    } else {
      first = i;
    }
    prev = i;
  }

  minDiff = Math.min(minDiff, MINUTES_IN_DAY - prev + first);

  return minDiff;
}
const timePoints = ['23:59', '00:00'];
console.log(findMinDifference(timePoints));
