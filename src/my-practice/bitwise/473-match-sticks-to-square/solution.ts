export function makesquare(matchsticks: number[]): boolean {
  const n = matchsticks.length;
  const sum = matchsticks.reduce((s, a) => s + a, 0);
  if (sum % 4 !== 0) return false;

  const target = sum / 4;
  matchsticks.sort((a, b) => b - a);

  const memo = new Map<string, boolean>();

  function dfs(mask: number, curr: number, k: number): boolean {
    if (k === 3) return true;
    const key = `${mask},${curr}`;
    if (memo.has(key)) return memo.get(key);
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) continue;
      const next = curr + matchsticks[i];

      if (next <= target) {
        const newMask = mask | (1 << i);
        if (next === target) {
          if (dfs(newMask, 0, k + 1)) {
            memo.set(key, true);
            return true;
          }
        } else {
          if (dfs(newMask, next, k)) {
            memo.set(key, true);
            return true;
          }
        }
      }
    }
    memo.set(key, false);
    return false;
  }

  return dfs(0, 0, 0);
}

const matchsticks = [1, 1, 2, 2, 2];
console.log(makesquare(matchsticks));
/* 
Input: matchsticks = [1,1,2,2,2]
Output: true
Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.

*/
