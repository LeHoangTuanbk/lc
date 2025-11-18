export function findTheDifference(s: string, t: string): string {
  const arr = s
    .concat(t)
    .split('')
    .map((c) => c.charCodeAt(0));
  return String.fromCharCode(arr.reduce((s, a) => s ^ a, 0));
}
