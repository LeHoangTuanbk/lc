export function partition(s: string): string[][] {
  const res: string[][] = [];
  const path: string[] = [];
  const n = s.length;

  function backtrack(start: number) {
    if (start === n) {
      res.push([...path]);
      return;
    }

    for (let end = start; end < n; end++) {
      if (isPalindrome(s, start, end)) {
        path.push(s.slice(start, end + 1));
        backtrack(end + 1);
        path.pop();
      }
    }
  }

  backtrack(0);
  return res;
}

function isPalindrome(s: string, left: number, right: number) {
  const n = s.length;
  while (left < right) {
    if (s[left] != s[right]) return false;
    left++;
    right--;
  }
  return true;
}
