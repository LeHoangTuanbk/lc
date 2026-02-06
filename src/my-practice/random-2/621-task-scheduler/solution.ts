export function leastInterval(tasks: string[], n: number): number {
  const freq = Array(26).fill(0);
  for (const t of tasks) {
    freq[t.charCodeAt(0) - 65]++;
  }

  freq.sort((a, b) => b - a);
  let k = 0;
  const fMax = freq[0];
  for (const f of freq) {
    if (f === fMax) k++;
    else break;
  }

  const intervals = (fMax - 1) * (n + 1) + k;
  return Math.max(tasks.length, intervals);
}
