export function reverseInParentheses(s: string) {
  const stack: string[] = [];

  for (const ch of s) {
    if (ch === ')') {
      const currentStack: string[] = [];
      while (stack.at(-1) != '(') {
        currentStack.push(stack.pop());
      }
      stack.pop();
      stack.push(...currentStack);
    } else {
      stack.push(ch);
    }
  }

  return stack.join('');
}

const s = 'foo(bar(baz))blim';
console.log(reverseInParentheses(s));
