export function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let res = 0;
  for (const num1 of arr1) {
    const lower = num1 - d;
    let upper = num1 + d;
    if (notInRangeSearch(arr2, lower, upper)) {
      res++;
    }
  }

  return res;
}

function notInRangeSearch(arr: number[], from: number, to: number) {
  let low = 0,
    high = arr.length;
  while (low <= high) {
    const mid = (low + high) >> 1;
    if (arr[mid] >= from && arr[mid] <= to) {
      return false;
    } else if (arr[mid] < from) low = mid + 1;
    else {
      high = mid - 1;
    }
  }
  return true;
}

function notInRangeSearch2(arr: number[], from: number, to: number): boolean {
  let low = 0,
    high = arr.length;

  // tìm phần tử đầu tiên >= from
  while (low < high) {
    const mid = (low + high) >> 1;
    if (arr[mid] < from) low = mid + 1;
    else high = mid;
  }

  // bây giờ low là index đầu tiên >= from
  // nếu low vẫn trong mảng và arr[low] <= to → có số trong khoảng
  if (low < arr.length && arr[low] <= to) return false;
  return true;
}

const arr1 = [-3, 10, 2, 8, 0, 10],
  arr2 = [-9, -1, -4, -9, -8],
  d = 9;

console.log(findTheDistanceValue(arr1, arr2, d));
/* 
Example 1:
[1,2,3,4,5]
Find 4
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
