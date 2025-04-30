function binarySearch(arr: number[], low: number, high: number, x: number): number {
  return -1;
}

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

// function guessNumber(n: number): number {
//   let low = 1,
//     high = n;
//   while (low <= high) {
//     let mid = low + Math.floor((high - low) / 2);
//     let guess = guess(mid);
//     if (guess === 0) {
//       return mid;
//     } else if (guess === 1) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
// }

function isPerfectSquare(num: number): boolean {
  let low = 1;
  let high = num;
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);
    let s = mid * mid;
    if (s == num) {
      return true;
    } else if (s < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}

function arrangeCoins(n: number): number {
  let low = 1,
    high = n,
    res = 0;
  while (low <= high) {
    let k = low + Math.floor((high - low) / 2);
    let coinNeed = (k * (k + 1)) / 2;
    if (n >= coinNeed) {
      res = Math.max(res, k);
      low = k + 1;
    } else {
      high = k - 1;
    }
  }
  return res;
}

arrangeCoins(5);
/*
Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2

O(logn) or O(1)
*/
// function singleNonDuplicate(nums: number[]): number {
//   let low = 1,
//     high = nums.length,
//     res = 0;
//   while (low <= high) {
//     let mid = low + Math.floor((high - low) / 2);
//     let coinNeed = (k * (k + 1)) / 2;
//     if (n >= coinNeed) {
//       res = Math.max(res, k);
//       low = k + 1;
//     } else {
//       high = k - 1;
//     }
//   }
//   return res;
// }

function singleNonDuplicate(nums: number[]): number {}
