function countAndTrack(mid: number, arr: number[]): [number, number, number] {
  let count = 0;
  let i = 0;
  let bestNumber = 0,
    bestDenom = 1;
  for (let j = 1; j < arr.length; j++) {
    while (i < j && arr[i] <= mid * arr[j]) i++;
    count += i;

    if (i > 0 && bestNumber * arr[j] < arr[i - 1] * bestDenom) {
      bestNumber = arr[i - 1];
      bestDenom = arr[j];
    }
  }

  return [count, bestNumber, bestDenom];
}

export function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
  let lo = 0,
    hi = 1;
  let bestNumber = 0,
    bestDenom = 1;

  while (hi - lo > 1e-9) {
    const mid = (hi + lo) / 2;
    const [count, number, denom] = countAndTrack(mid, arr);

    if (count >= k) {
      hi = mid;
      bestNumber = number;
      bestDenom = denom;
    } else {
      lo = mid;
    }
  }
  return [bestNumber, bestDenom];
}
const arr = [1, 2, 3, 5],
  k = 3;
console.log(kthSmallestPrimeFraction(arr, k));
