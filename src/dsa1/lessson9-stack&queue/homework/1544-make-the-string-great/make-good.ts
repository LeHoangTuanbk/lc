export function makeGood(s: string): string {
  const stack: string[] = [];
  for (const c of s) {
    if (!stack.length) {
      stack.push(c);
      continue;
    }
    const top = stack[stack.length - 1];
    if ((top.toLocaleUpperCase() == c || top.toLocaleLowerCase() == c) && top !== c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.join('');
}
