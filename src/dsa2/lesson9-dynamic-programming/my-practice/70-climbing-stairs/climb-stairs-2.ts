export function climbStairs(n: number): number {
  if (n <= 3) return n;
  let prev2 = 1,
    prev1 = 2;
  for (let i = 3; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}

console.log(climbStairs(4));

/* 
i = 3 : prev1 = 3
i = 4: prev1 = 3 + 2 = 5;

*/
