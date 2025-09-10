export function findClosestElements(arr: number[], k: number, x: number): number[] {
  let minIndex = 0;
  let minDist = Infinity;

  for (let i = 0; i <= arr.length - k; i++) {
    const left = arr[i];
    const right = arr[i + k - 1];

    // So sánh độ lệch giữa đầu và cuối để xem đoạn con có tốt không
    const dist = Math.abs(x - left) + Math.abs(right - x);

    if (dist < minDist) {
      minDist = dist;
      minIndex = i;
    }
  }

  return arr.slice(minIndex, minIndex + k);
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
