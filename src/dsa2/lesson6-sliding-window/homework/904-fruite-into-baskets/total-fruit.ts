export function totalFruit(fruits: number[]): number {
  const n = fruits.length;
  let left = 0,
    maxLen = 0;
  const count = new Map<number, number>();

  for (let right = 0; right < n; right++) {
    const fruit = fruits[right];
    count.set(fruit, (count.get(fruit) || 0) + 1);

    while (count.size > 2) {
      const leftFruit = fruits[left];
      count.set(leftFruit, count.get(leftFruit) - 1);
      if (count.get(leftFruit) === 0) {
        count.delete(leftFruit);
      }
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

const fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
console.log(totalFruit(fruits));
/* 
Example 1:

Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.
Example 2:

Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].
Example 3:

Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].

*/
