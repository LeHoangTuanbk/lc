export function isValid2(s: string): boolean {
  const characters = s.split('');
  const parentheses: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  const stack: string[] = [];
  for (const c of characters) {
    if (c in parentheses) {
      if (stack.length === 0) return false;
      if (stack[stack.length - 1] === parentheses[c]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
}

export function isValid(s: string): boolean {
  const characters = s.split('');
  const parentheses: Record<string, string> = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const stack: string[] = [];
  for (const c of characters) {
    if (c in parentheses) {
      stack.push(c);
    } else {
      if (stack.length && parentheses[stack[stack.length - 1]] === c) {
        stack.pop();
      } else return false;
    }
  }
  return stack.length === 0;
}
