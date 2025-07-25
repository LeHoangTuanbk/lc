export function getStrongest(arr: number[], k: number): number[] {
  const n = arr.length;

  const newArr = [...arr];
  newArr.sort((a, b) => a - b);
  const median = newArr[Math.floor((n - 1) / 2)];
  const arrIdx: [number, number][] = [];
  for (let i = 0; i < n; i++) {
    arrIdx.push([Math.abs(arr[i] - median), i]); // value, index
  }
  arrIdx.sort((a, b) => {
    if (a[0] === b[0]) return arr[b[1]] - arr[a[1]];
    else return b[0] - a[0];
  });

  let res: number[] = [];
  for (let i = 0; i < k; i++) {
    res.push(arr[arrIdx[i][1]]);
  }
  return res;
}

export function getStrongest2(arr: number[], k: number): number[] {
  const n = arr.length;
  arr.sort((a, b) => a - b);
  const median = arr[Math.floor((n - 1) / 2)];

  let left = 0,
    right = n - 1;
  const res: number[] = [];

  while (res.length < k) {
    const leftStrength = Math.abs(arr[left] - median);
    const rightStrength = Math.abs(arr[right] - median);
    if (
      rightStrength > leftStrength ||
      (rightStrength === leftStrength && arr[right] > arr[left])
    ) {
      res.push(arr[right--]);
    } else {
      res.push(arr[left++]);
    }
  }
  return res;
}

const arr = [-2, -4, -6, -8, -9, -7, -5, -3, -1];
const k = 3;

console.log(getStrongest(arr, k));
/* 
Example 1:

Input: arr = [1,2,3,4,5], k = 2
Output: [5,1]
Explanation: Centre is 3, the elements of the array sorted by the strongest are [5,1,4,2,3]. The strongest 2 elements are [5, 1]. [1, 5] is also accepted answer.
Please note that although |5 - 3| == |1 - 3| but 5 is stronger than 1 because 5 > 1.
Example 2:

Input: arr = [1,1,3,5,5], k = 2
Output: [5,5]
Explanation: Centre is 3, the elements of the array sorted by the strongest are [5,5,1,1,3]. The strongest 2 elements are [5, 5].
Example 3:

Input: arr = [6,7,11,7,6,8], k = 5
Output: [11,8,6,6,7]
Explanation: Centre is 7, the elements of the array sorted by the strongest are [11,8,6,6,7,7].
Any permutation of [11,8,6,6,7] is accepted.

*/
