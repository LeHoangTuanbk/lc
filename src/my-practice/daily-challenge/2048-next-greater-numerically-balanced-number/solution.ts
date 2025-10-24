function checkBalanced(n: number) {
  const nString = n.toString();
  const freq = new Map<string, number>();
  for (const c of nString) {
    freq.set(c, (freq.get(c) ?? 0) + 1);
  }
  for (const c of nString) {
    if (Number(c) != freq.get(c)) return false;
  }

  return true;
}

export function nextBeautifulNumber(n: number): number {
  const MAX = 1e6 + 666_666 + 1;
  for (let i = n + 1; i < MAX; i++) {
    if (checkBalanced(i)) return i;
  }
}

const n = 1;
console.log(nextBeautifulNumber(n));

/* 
Example 1:

Input: n = 1
Output: 22
Explanation: 
22 is numerically balanced since:
- The digit 2 occurs 2 times. 
It is also the smallest numerically balanced number strictly greater than 1.
Example 2:

Input: n = 1000
Output: 1333
Explanation: 
1333 is numerically balanced since:
- The digit 1 occurs 1 time.
- The digit 3 occurs 3 times. 
It is also the smallest numerically balanced number strictly greater than 1000.
Note that 1022 cannot be the answer because 0 appeared more than 0 times.
Example 3:

Input: n = 3000
Output: 3133
Explanation: 
3133 is numerically balanced since:
- The digit 1 occurs 1 time.
- The digit 3 occurs 3 times.
It is also the smallest numerically balanced number strictly greater than 3000.

*/
