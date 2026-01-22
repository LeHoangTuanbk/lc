export function findSubstringInWraproundString(s: string): number {
  const dp = new Array<number>(26).fill(0);
  let curLen = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = s.charCodeAt(i) - 97;
    if (
      (i > 0 && s.charCodeAt(i) - s.charCodeAt(i - 1) === 1) ||
      s.charCodeAt(i - 1) - s.charCodeAt(i) === 25
    ) {
      curLen++;
    } else {
      curLen = 1;
    }
    dp[curr] = Math.max(dp[curr], curLen);
  }
  return dp.reduce((a, b) => a + b, 0);
}

const s = 'zab';
console.log(findSubstringInWraproundString(s));
