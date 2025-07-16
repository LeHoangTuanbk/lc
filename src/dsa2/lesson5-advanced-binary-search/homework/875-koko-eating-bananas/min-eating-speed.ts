export function minEatingSpeed(piles: number[], h: number): number {
  let lo = 1,
    hi = 1e9;
  let minK = Infinity;
  while (lo <= hi) {
    const k = lo + Math.floor((hi - lo) / 2);
    if (canEatAll(piles, k, h)) {
      minK = k;
      hi = k - 1;
    } else {
      lo = k + 1;
    }
  }
  return minK;
}

function canEatAll(piles: number[], k: number, h: number) {
  let totalHours = 0;
  for (const pile of piles) {
    totalHours += Math.ceil(pile / k);
  }
  return totalHours <= h;
}

const piles = [30, 11, 23, 4, 20],
  h = 5;
console.log(minEatingSpeed(piles, h));

/* 
Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30
Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23

*/
