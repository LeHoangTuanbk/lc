export function maxHeight(cuboids: number[][]): number {
  // normalize each cuboid because of free rotation
  for (const c of cuboids) c.sort((a, b) => a - b);
  cuboids.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);

  const n = cuboids.length;
  const dp = new Array(n).fill(0);
  let res = 0;

  for (let i = 0; i < n; i++) {
    dp[i] = cuboids[i][2]; // high
    for (let j = 0; j < i; j++) {
      if (
        cuboids[j][0] <= cuboids[i][0] &&
        cuboids[j][1] <= cuboids[i][1] &&
        cuboids[j][2] <= cuboids[i][2]
      ) {
        dp[i] = Math.max(dp[i], dp[j] + cuboids[i][2]);
      }
    }
    res = Math.max(res, dp[i]);
  }

  return res;
}

const cuboids = [
  [50, 45, 20],
  [95, 37, 53],
  [45, 23, 12],
];
console.log(maxHeight(cuboids));
/* 
Input: cuboids = [[50,45,20],[95,37,53],[45,23,12]]
Output: 190
Explanation:
Cuboid 1 is placed on the bottom with the 53x37 side facing down with height 95.
Cuboid 0 is placed next with the 45x20 side facing down with height 50.
Cuboid 2 is placed next with the 23x12 side facing down with height 45.
The total height is 95 + 50 + 45 = 190.
*/
