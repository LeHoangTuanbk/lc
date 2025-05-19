export function minLength(s: string): number {
  let stack: string[] = [];
  for (const c of s) {
    const subString = stack[stack.length - 1] + c;
    if (subString === 'AB' || subString === 'CD') {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.length;
}
