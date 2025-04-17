export function reverseString(s: string[]): string[] {
  let i = 0,
    j = s.length - 1;

  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
  return s;
}

console.log(reverseString("test".split("")));
