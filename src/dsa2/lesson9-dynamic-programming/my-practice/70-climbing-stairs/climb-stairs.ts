function climbStairs(n: number): number {
  const memo = Array(n + 1).fill(null);
  return backtrack(n, memo);
}

function backtrack(n: number, memo: number[]) {
  if (n <= 3) return n;
  if (memo[n] !== null) return memo[n];
  const res = backtrack(n - 1, memo) + backtrack(n - 2, memo);
  memo[n] = res;
  return res;
}
