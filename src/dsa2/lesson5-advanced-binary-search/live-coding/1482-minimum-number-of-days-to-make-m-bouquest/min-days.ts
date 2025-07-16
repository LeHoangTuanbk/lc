export function minDays(bloomDay: number[], m: number, k: number): number {
  let lo = 0,
    hi = 1e9,
    res = -1;

  const n = bloomDay.length;
  if (m * k > n) return res;
  hi = Math.max(...bloomDay);

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (canMakeBouquet(bloomDay, mid, m, k)) {
      res = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return res;
}

function canMakeBouquet(bloomDay: number[], mid: number, m: number, k: number) {
  let count = 0;
  for (const num of bloomDay) {
    if (num <= mid) {
      count++;
      if (count >= k) {
        count = 0;
        m--;
      }
    } else {
      count = 0;
    }
    if (m <= 0) return true;
  }
  return false;
}
/* 
Example 3:

Input: bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3
Output: 12
Explanation: We need 2 bouquets each should have 3 flowers.
Here is the garden after the 7 and 12 days:
After day 7: [x, x, x, x, _, x, x]
We can make one bouquet of the first three flowers that bloomed. We cannot make another bouquet from the last three flowers that bloomed because they are not adjacent.
After day 12: [x, x, x, x, x, x, x]
It is obvious that we can make two bouquets in different ways.

bloomDay.length == n
1 <= n <= 105
1 <= bloomDay[i] <= 109
1 <= m <= 106
1 <= k <= n

*/
