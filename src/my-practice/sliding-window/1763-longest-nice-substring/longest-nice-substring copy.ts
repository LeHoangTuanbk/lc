export function longestNiceSubstring(s: string): string {
  if (s.length < 2) return '';

  const set = new Set(s);

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (set.has(c.toLocaleLowerCase()) && set.has(c.toLocaleUpperCase())) continue;

    const left = longestNiceSubstring(s.slice(0, i));
    const right = longestNiceSubstring(s.slice(i + 1));

    return left.length >= right.length ? left : right;
  }

  return s;
}
