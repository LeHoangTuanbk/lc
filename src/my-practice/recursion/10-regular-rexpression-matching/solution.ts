export function isMatch(s: string, p: string): boolean {
  const pattern = new RegExp(p);
  return pattern.test(s);
}
const s = 'aa',
  p = 'a*';
console.log(isMatch(s, p));
