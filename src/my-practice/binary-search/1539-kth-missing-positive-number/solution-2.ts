export function findKthPositive(arr: number[], k: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const missing = arr[mid] - (mid + 1);

    if (missing < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return k + left;
}

// 1 2 3 4 5 6 7 8 9 10 11
const arr = [8, 17, 23, 34, 37, 42],
  k = 16;

console.log(findKthPositive(arr, k));

/* 
1 <= arr.length <= 1000
1 <= arr[i] <= 1000
1 <= k <= 1000
arr[i] < arr[j] for 1 <= i < j <= arr.length

*/
