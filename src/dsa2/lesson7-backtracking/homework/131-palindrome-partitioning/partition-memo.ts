export function partition(s: string): string[][] {
  const n = s.length;
  const res: string[][] = [];
  const path: string[] = [];

  const memo: (boolean | undefined)[][] = Array.from({ length: n }, () => Array(n).fill(undefined));

  function isPalindrome(left: number, right: number): boolean {
    if (memo[left][right] !== undefined) return memo[left][right]!;

    while (left < right) {
      if (s[left] !== s[right]) {
        memo[left][right] = false;
        return false;
      }
      left++;
      right--;
    }
    memo[left][right] = true;
    return true;
  }

  function backtrack(start: number): void {
    if (start === n) {
      res.push([...path]);
      return;
    }

    for (let end = start; end < n; end++) {
      if (isPalindrome(start, end)) {
        path.push(s.slice(start, end + 1));
        backtrack(end + 1);
        path.pop();
      }
    }
  }

  backtrack(0);
  return res;
}
