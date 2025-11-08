function isCharacter(c: string) {
  return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}

export function letterCasePermutation(s: string): string[] {
  const n = s.length;
  const sArr = s.split('');
  let res: string[] = [];

  function backtrack(candidates: string[], start: number) {
    if (candidates.length === n) {
      res.push(candidates.join(''));
      return;
    }
    for (let i = start; i < n; i++) {
      if (!isCharacter(sArr[i])) {
        candidates.push(sArr[i]);
        backtrack(candidates, i + 1);
        candidates.pop();
      } else {
        candidates.push(sArr[i].toLowerCase());
        backtrack(candidates, i + 1);
        candidates.pop();

        candidates.push(sArr[i].toUpperCase());
        backtrack(candidates, i + 1);
        candidates.pop();
      }
    }
  }

  backtrack([], 0);

  return res;
}

const s = 'a1b2';
console.log(letterCasePermutation(s));
