function isPalindrome(s: string): boolean {
  return s === s.split('').reverse().join('');
}

// naive
export function countBinaryPalindromes(n: number): number {
  if (n == 0) return 1;
  let count = 0;

  for (let k = 1; k <= n; k = k + 2) {
    if (isPalindrome(k.toString(2))) {
      count++;
    }
  }
  count++; // 0 case
  return count;
}
