export function frequencySort(s: string): string {
  const map = new Map<string, number>();
  for (const c of s) {
    if (!map.has(c)) {
      map.set(c, 0);
    }
    map.set(c, map.get(c) + 1);
  }
  return s
    .split('')
    .sort((a, b) => map.get(b) - map.get(a) || a.charCodeAt(0) - b.charCodeAt(0))
    .join('');
}

const s = 'tree';
console.log(frequencySort(s));
