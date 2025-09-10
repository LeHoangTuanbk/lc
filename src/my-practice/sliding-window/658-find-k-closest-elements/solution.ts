export function findClosestElements(arr: number[], k: number, x: number): number[] {
  const n = arr.length;
  if (x < arr[0]) return arr.slice(0, k);
  if (x > arr.at(-1)) return arr.slice(n - k);
  if (n === 1 && k === 1) return arr;

  // binary search to find best index of x, find lower bound
  let low = 0,
    high = n - 1;
  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  // sliding window to expand, shrink
  let left = low - 1,
    right = low;
  while (right - (left + 1) < k) {
    if (left < 0) {
      right++;
    } else if (right >= n) {
      left--;
    } else if (x - arr[left] <= arr[right] - x) {
      left--;
    } else {
      right++;
    }
  }
  return arr.slice(left + 1, right);
}

const arr = [1, 2, 3, 4, 5],
  k = 4,
  x = 3;
console.log(findClosestElements(arr, k, x));
/* 
Example 1:

Input: arr = [1,2,6,7], k = 4, x = 4

Output: [1,2,3,4]

Example 2:

Input: arr = [1,1,2,3,4,5], k = 4, x = -1

Output: [1,1,2,3]

*/
