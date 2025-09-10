export function findClosestElements(arr: number[], k: number, x: number): number[] {
  const n = arr.length;
  let left = 0,
    right = n - k;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    const distLeft = x - arr[mid];
    const disRight = arr[mid + k] - x;

    if (distLeft <= disRight) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return arr.slice(left, left + k);
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
