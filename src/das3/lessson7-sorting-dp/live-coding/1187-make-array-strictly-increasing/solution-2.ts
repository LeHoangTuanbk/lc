export function makeArrayIncreasing(arr1: number[], arr2: number[]) {
  arr2.sort((a, b) => a - b);
  arr2 = Array.from(new Set(arr2));

  const n = arr1.length,
    m = arr2.length;

  let dp = new Map<number, number>();
  dp.set(-1, 0);

  for (let i = 0; i < n; i++) {
    const newDp = new Map<number, number>();

    for (const [lastVal, ops] of dp) {
      if (arr1[i] > lastVal) {
        const newOps = newDp.get(arr1[i]) ?? Infinity;
        newDp.set(arr1[i], Math.min(newOps, ops));
      }

      const idx = binarySearch(arr2, lastVal + 1);
      if (idx < m) {
        const newOps = newDp.get(arr2[idx]) ?? Infinity;
        newDp.set(arr2[idx], Math.min(newOps, ops + 1));
      }
    }

    dp = newDp;
  }

  let result = Infinity;
  for (const ops of dp.values()) {
    result = Math.min(result, ops);
  }

  return result < Infinity ? result : -1;
}

function binarySearch(arr: number[], target: number): number {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
