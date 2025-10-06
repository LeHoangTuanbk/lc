export function maxLength(ribbons: number[], k: number): number {
  let left = 0,
    right = Math.max(...ribbons);

  function canCut(length: number): boolean {
    let count = 0;
    for (const ribbon of ribbons) {
      count += Math.floor(ribbon / length);
    }
    return count >= k;
  }

  while (left < right) {
    const mid = (left + right + 1) >> 1;
    if (canCut(mid)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

console.log(maxLength([7, 5, 9], 4));

/* 
Example 1:

Input: ribbons = [9,7,5], k = 3

Output: 5

Explanation:

Cut the first ribbon to two ribbons, one of length 5 and one of length 4.
Cut the second ribbon to two ribbons, one of length 5 and one of length 2.
Keep the third ribbon as it is.
Now you have 3 ribbons of length 5.

Example 2:

Input: ribbons = [7,5,9], k = 4

Output: 4

Explanation:

Cut the first ribbon to two ribbons, one of length 4 and one of length 3.
Cut the second ribbon to two ribbons, one of length 4 and one of length 1.
Cut the third ribbon to three ribbons, two of length 4 and one of length 1.
Now you have 4 ribbons of length 4.

Example 3:

Input: ribbons = [5,7,9], k = 22

Output: 0

Explanation: You cannot obtain k ribbons of the same positive integer length.

*/
