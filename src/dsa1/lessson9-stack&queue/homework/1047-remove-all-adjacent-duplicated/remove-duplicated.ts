export function removeDuplicates(s: string): string {
  const stack: string[] = [];
  for (const c of s) {
    if (stack.length && stack[stack.length - 1] == c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.join('');
}
