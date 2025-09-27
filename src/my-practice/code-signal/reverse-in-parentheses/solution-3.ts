export function reverseParentheses(s: string): string {
  const n = s.length;
  const stack: number[] = [];
  const pair: number[] = Array(n);

  for (let i = 0; i < n; i++) {
    if (s[i] === '(') stack.push(i);
    if (s[i] === ')') {
      const j = stack.pop();
      pair[i] = j;
      pair[j] = i;
    }
  }

  let res: string[] = [];
  for (let i = 0, dir = 1; i < n; i += dir) {
    if (s[i] === '(' || s[i] === ')') {
      i = pair[i];
      dir = -dir;
    } else {
      res.push(s[i]);
    }
  }
  return res.join('');
}
