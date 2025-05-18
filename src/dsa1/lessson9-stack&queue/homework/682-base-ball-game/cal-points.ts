export function calPoints(operations: string[]): number {
  const stack: number[] = [];
  for (const c of operations) {
    const len = stack.length;
    if (c == 'D') {
      stack[len] = stack[len - 1] * 2;
    } else if (c === 'C') {
      stack.pop();
    } else if (c === '+') {
      stack.push(stack[len - 1] + stack[len - 2]);
    } else {
      stack.push(parseInt(c));
    }
  }
  return stack.reduce((pre, acc) => pre + acc, 0);
}
