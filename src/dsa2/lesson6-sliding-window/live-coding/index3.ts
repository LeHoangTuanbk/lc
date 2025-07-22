export function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  const n = arr.length;
  let sum = 0;
  for (let i = 0; i < k - 1; i++) {
    sum += arr[i];
  }

  let res = 0;
  let start = 0;
  while (start <= n - k) {
    sum += arr[start + k - 1];
    if (sum >= k * threshold) {
      res++;
    }
    sum -= arr[start];
    start++;
  }

  return res;
}

const arr = [2, 2, 2, 2, 5, 5, 5, 8],
  k = 3,
  threshold = 4;

console.log(numOfSubarrays(arr, k, threshold));
