export function longestMountain(arr: number[]): number {
  const n = arr.length;
  if (n < 3) return 0;

  let i = 0,
    j = 0,
    best = 0;

  while (i < n) {
    j = i;

    while (j + 1 < n && arr[j] < arr[j + 1]) j++;
    if (j === i) {
      i++;
      continue;
    }

    if (j === n - 1) {
      break;
    }

    if (arr[j] > arr[j + 1]) {
      while (j + 1 < n && arr[j] > arr[j + 1]) j++;
      best = Math.max(best, j - i + 1);
    }

    i = j;
  }

  return best;
}

function longestMountain2(arr: number[]): number {
  const n = arr.length;
  let best = 0;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      let l = i,
        r = i;
      while (l > 0 && arr[l - 1] < arr[l]) l--;
      while (r + 1 < n && arr[r] > arr[r + 1]) r++;
      best = Math.max(best, r - l + 1);
      i = r;
    }
  }

  return best;
}
