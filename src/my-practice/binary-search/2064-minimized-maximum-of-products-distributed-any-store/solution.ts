export function minimizedMaximum(n: number, quantities: number[]): number {
  let left = 1,
    right = Math.max(...quantities);

  const canDistribute = (maxPerStore: number): boolean => {
    let totalStore = 0;
    for (const q of quantities) {
      totalStore += Math.ceil(q / maxPerStore);
    }
    return totalStore <= n;
  };

  while (left < right) {
    const mid = (left + right) >> 1;
    if (canDistribute(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

/* 
Example 1:

Input: n = 6, quantities = [11,6]
Output: 3
Explanation: One optimal way is:
- The 11 products of type 0 are distributed to the first four stores in these amounts: 2, 3, 3, 3
- The 6 products of type 1 are distributed to the other two stores in these amounts: 3, 3
The maximum number of products given to any store is max(2, 3, 3, 3, 3, 3) = 3.
Example 2:

Input: n = 7, quantities = [15,10,10]
Output: 5
Explanation: One optimal way is:
- The 15 products of type 0 are distributed to the first three stores in these amounts: 5, 5, 5
- The 10 products of type 1 are distributed to the next two stores in these amounts: 5, 5
- The 10 products of type 2 are distributed to the last two stores in these amounts: 5, 5
The maximum number of products given to any store is max(5, 5, 5, 5, 5, 5, 5) = 5.
Example 3:

Input: n = 1, quantities = [100000]
Output: 100000
Explanation: The only optimal way is:
- The 100000 products of type 0 are distributed to the only store.
The maximum number of products given to any store is max(100000) = 100000.

*/
