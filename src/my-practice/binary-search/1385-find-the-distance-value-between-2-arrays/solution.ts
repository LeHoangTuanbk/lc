export function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
  let res = 0;
  for (const num1 of arr1) {
    let distanceValueFlag = true;
    for (const num2 of arr2) {
      if (Math.abs(num1 - num2) <= d) {
        distanceValueFlag = false;
        break;
      }
    }
    if (distanceValueFlag) res++;
  }
  return res;
}
/* 
Example 1:

Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
Output: 2
Explanation: 
For arr1[0]=4 we have: 
|4-10|=6 > d=2 
|4-9|=5 > d=2 
|4-1|=3 > d=2 
|4-8|=4 > d=2 
For arr1[1]=5 we have: 
|5-10|=5 > d=2 
|5-9|=4 > d=2 
|5-1|=4 > d=2 
|5-8|=3 > d=2
For arr1[2]=8 we have:
|8-10|=2 <= d=2
|8-9|=1 <= d=2
|8-1|=7 > d=2
|8-8|=0 <= d=2

*/
