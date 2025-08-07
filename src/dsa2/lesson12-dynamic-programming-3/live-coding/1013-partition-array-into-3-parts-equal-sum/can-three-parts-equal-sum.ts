export function canThreePartsEqualSum(arr: number[]): boolean {
  const n = arr.length;
  const total = arr.reduce((a, b) => a + b);
  if (total % 3 !== 0) return false;
  const target = total / 3;

  let curSum = 0,
    count = 0;

  for (let i = 0; i < n; i++) {
    curSum += arr[i];
    if (curSum === target) {
      count++;
      curSum = 0;
      if (count === 2 && i < n - 1) return true;
    }
  }
  return false;
}

const arr = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1];
console.log(canThreePartsEqualSum(arr));
// Pay attention the test case with 0 at the end
/* 
Example 1:

Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
Output: true
Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
Example 2:

Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1]
Output: false
Example 3:

Input: arr = [3,3,6,5,-2,2,5,1,-9,4]
Output: true
Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
*/
