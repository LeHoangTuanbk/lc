export function maxArea(height: number[]): number {
  const n = height.length;
  let i = 0,
    j = n - 1,
    best = area(height, i, j);
  while (i < j) {
    best = Math.max(best, area(height, i, j));
    if (height[i] < height[j]) i++;
    else j--;
  }
  return best;
}

function area(height: number[], i: number, j: number) {
  return Math.min(height[i], height[j]) * (j - i);
}

const height = [1, 2, 4, 3];
console.log(maxArea(height)); //4
/* 
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

*/
