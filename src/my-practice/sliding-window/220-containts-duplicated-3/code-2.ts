function lowerBound(arr: number[], target: number): number {
  let left = 0,
    right = arr.length;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

function insertSorted(arr: number[], num: number) {
  const idx = lowerBound(arr, num);
  arr.splice(idx, 0, num); // insert at correct position
}

function removeSorted(arr: number[], num: number) {
  const idx = lowerBound(arr, num);
  if (idx < arr.length && arr[idx] === num) {
    arr.splice(idx, 1);
  }
}

export function containsNearbyAlmostDuplicate(
  nums: number[],
  indexDiff: number,
  valueDiff: number,
): boolean {
  const window: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    const idx = lowerBound(window, num - valueDiff);
    if (idx < window.length && Math.abs(window[idx] - num) <= valueDiff) {
      return true;
    }

    insertSorted(window, num);
    if (window.length > indexDiff) {
      removeSorted(window, nums[i - indexDiff]);
    }
  }

  return false;
}
