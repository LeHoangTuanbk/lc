function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

export function nthUglyNumber(n: number, a: number, b: number, c: number): number {
  const ab = lcm(a, b);
  const bc = lcm(b, c);
  const ca = lcm(c, a);
  const abc = lcm(ab, c);

  let left = 1,
    right = 2e9;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    const count =
      Math.floor(mid / a) +
      Math.floor(mid / b) +
      Math.floor(mid / c) -
      Math.floor(mid / ab) -
      Math.floor(mid / bc) -
      Math.floor(mid / ca) +
      Math.floor(mid / abc);
    if (count >= n) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

const n = 3,
  a = 2,
  b = 3,
  c = 5;

console.log(nthUglyNumber(n, a, b, c));

/* 
Example 1:

Input: n = 3, a = 2, b = 3, c = 5
Output: 4
Explanation: The ugly numbers are 2, 3, 4, 5, 6, 8, 9, 10... The 3rd is 4.
Example 2:

Input: n = 4, a = 2, b = 3, c = 4
Output: 6
Explanation: The ugly numbers are 2, 3, 4, 6, 8, 9, 10, 12... The 4th is 6.
Example 3:

Input: n = 5, a = 2, b = 11, c = 13
Output: 10
Explanation: The ugly numbers are 2, 4, 6, 8, 10, 11, 12, 13... The 5th is 10.

Constraints:

1 <= n, a, b, c <= 10^9
1 <= a * b * c <= 10^18
It is guaranteed that the result will be in range [1, 2 * 109].
*/
