export function maxEnvelopes(envelopes: number[][]): number {
  envelopes.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    return a[0] - b[0];
  });

  const small: number[] = [];

  for (const [_, num] of envelopes) {
    const idx = lowerBound(small, num);
    if (idx === small.length) {
      small.push(num);
    } else {
      small[idx] = num;
    }
  }

  return small.length;
}

function lowerBound(nums: number[], target: number): number {
  let lo = 0,
    hi = nums.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid] >= target) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
}

const envelopes = [
  [5, 4],
  [6, 4],
  [6, 7],
  [2, 3],
];

console.log(maxEnvelopes(envelopes));
// console.log(lowerBound([1, 2, 4, 6], 3));
/* 
Example 1:

Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]

[ [ 2, 3 ], [ 5, 4 ], [ 6, 4 ], [ 6, 7 ] ]
[ 3, 4, 4, 7 ]

Output: 3
Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).

*/
