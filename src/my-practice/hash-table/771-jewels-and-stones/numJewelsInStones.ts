export function numJewelsInStones2(jewels: string, stones: string): number {
  let res = 0;
  const jewelsString = new Set(jewels.split(''));
  const stonesString = stones.split('');
  for (const c of stonesString) {
    if (jewelsString.has(c)) {
      res++;
    }
  }
  return res;
}
// Space optimized if length of stones, jewels is large
export function numJewelsInStones(jewels: string, stones: string): number {
  let res = 0;
  const count = Array(128).fill(0);
  for (const c of stones) {
    count[c.charCodeAt(0)]++;
  }
  for (const c of jewels) {
    res += count[c.charCodeAt(0)];
  }
  return res;
}
