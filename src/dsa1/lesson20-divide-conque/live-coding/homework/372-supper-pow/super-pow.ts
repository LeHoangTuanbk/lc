function modePow(a: number, b: number, c: number): number {
  if (b === 0) return 1;
  const mid = Math.floor(b / 2);
  const half = modePow(a, mid, c);
  const full = (half * half) % c;
  return b % 2 == 0 ? full : (full * (a % c)) % c;
}

const c = 1337;
export function superPow(a: number, b: number[]): number {
  a %= c;
  function helper(b: number[]): number {
    if (b.length === 0) return 1;
    const last = b.pop();
    const part1 = modePow(helper(b), 10, c);
    const part2 = modePow(a, last, c);
    return (part1 * part2) % c;
  }
  return helper(b);
}

// console.log(modePow(2, 3, 5));
const a = 2,
  b = [1, 0];
console.log(superPow(a, b));
/* 
Example 1:

Input: a = 2, b = [3]
Output: 8
Example 2:

Input: a = 2, b = [1,0]
Output: 1024
Example 3:

Input: a = 1, b = [4,3,3,8,5,2]
Output: 1


*/
