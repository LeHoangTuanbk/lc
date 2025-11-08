export function letterCombinations(digits: string): string[] {
  const letter = [
    '',
    '',
    [...'abc'.split('')],
    [...'def'.split('')],
    [...'ghi'.split('')],
    [...'jkl'.split('')],
    [...'mno'.split('')],
    [...'pqrs'.split('')],
    [...'tuv'.split('')],
    [...'wxyz'.split('')],
  ];
  let res: string[] = [];
  const n = digits.length;
  function backtrack(foundString: string[], start: number) {
    if (foundString.length === n) {
      res.push(foundString.join(''));
      return;
    }
    for (const c of letter[Number(digits[start])]) {
      foundString.push(c);
      backtrack(foundString, start + 1);
      foundString.pop();
    }
  }
  backtrack([], 0);
  return res;
}

console.log(letterCombinations('23'));
