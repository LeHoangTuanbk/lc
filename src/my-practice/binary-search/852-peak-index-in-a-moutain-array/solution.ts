export function peakIndexInMountainArray(arr: number[]): number {
  let low = 0,
    high = arr.length - 1;

  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    if (arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) {
      low = mid;
    } else if (arr[mid] < arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      high = mid;
    } else return mid;
  }
}

const arr = [0, 2, 3, 4, 5, 1, 0];
console.log(peakIndexInMountainArray(arr));

/* 
Example 1:

Input: arr = [0,1,0]

Output: 1

Example 2:

Input: arr = [0,2,3,4,5, 1,0]
[2,-1,-1]

Output: 1

Example 3:

Input: arr = [0,10,5,2]

Output: 1

*/
