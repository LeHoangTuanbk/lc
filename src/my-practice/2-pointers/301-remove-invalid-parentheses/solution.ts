export function removeInvalidParentheses(s: string): string[] {
  let leftRem = 0,
    rightRem = 0;
  for (const ch of s) {
    if (ch === '(') leftRem++;
    else if (ch === ')') {
      if (leftRem > 0) leftRem--;
      else rightRem++;
    }
  }

  const n = s.length;
  const res = new Set<string>();

  function backtrack(
    index: number,
    leftCount: number,
    rightCount: number,
    leftRem: number,
    rightRem: number,
    path: string[],
  ) {
    if (index === n) {
      if (leftRem === 0 && rightRem === 0 && leftCount === rightCount) {
        res.add(path.join(''));
      }
      return;
    }

    const ch = s[index];
    // Option 1: delete the current character
    if (ch === '(' && leftRem > 0) {
      backtrack(index + 1, leftCount, rightCount, leftRem - 1, rightRem, path);
    } else if (ch === ')' && rightRem > 0) {
      backtrack(index + 1, leftCount, rightCount, leftRem, rightRem - 1, path);
    }

    // Option 2: Keep the current character
    path.push(ch);
    if (ch !== '(' && ch !== ')') {
      backtrack(index + 1, leftCount, rightCount, leftRem, rightRem, path);
    } else if (ch === '(') {
      backtrack(index + 1, leftCount + 1, rightCount, leftRem, rightRem, path);
    } else if (ch === ')' && rightCount < leftCount) {
      backtrack(index + 1, leftCount, rightCount + 1, leftRem, rightRem, path);
    }
    path.pop();
  }

  backtrack(0, 0, 0, leftRem, rightRem, []);

  return Array.from(res);
}

const s = '()())()';
console.log(removeInvalidParentheses(s));
