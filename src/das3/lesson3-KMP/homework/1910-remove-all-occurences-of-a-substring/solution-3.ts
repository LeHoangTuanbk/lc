export function removeOccurrences(s: string, part: string): string {
  const n = part.length;

  const stack: string[] = [];

  for (const ch of s) {
    stack.push(ch);
    if (stack.length >= n && stack.slice(-n).join('') === part) {
      stack.length -= n;
    }
  }

  const finalString = stack.join('');

  return finalString;
}
