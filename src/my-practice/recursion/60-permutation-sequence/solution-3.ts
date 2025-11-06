export function getPermutation(n: number, k: number): string {
  let result: number[] = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  for (let i = 1; i < k; i++) {
    result = next(result);
  }

  return result.join('');
}

function next(nums: number[]): number[] {
  const arr = [...nums];
  const n = arr.length;
  let i = n - 2;
  while (i >= 0 && arr[i] >= arr[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = n - 1;
    while (j > i && arr[j] <= arr[i]) {
      j--;
    }

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  reverse(arr, i + 1, n - 1);
  return arr;
}

function reverse(arr: number[], start: number, end: number) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}
