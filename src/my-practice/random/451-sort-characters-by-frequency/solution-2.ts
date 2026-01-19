export function frequencySort(s: string): string {
  const map = new Map<string, number>();
  for (const c of s) {
    if (!map.has(c)) {
      map.set(c, 0);
    }
    map.set(c, map.get(c) + 1);
  }
  const buckets: string[][] = Array.from({ length: s.length + 1 }, () => []);
  for (const [char, count] of map) {
    buckets[count].push(char);
  }
  let res = '';
  for (let i = buckets.length - 1; i >= 0; i--) {
    for (const c of buckets[i]) {
      res += c.repeat(i);
    }
  }
  return res;
}

const s = 'tree';
console.log(frequencySort(s));
