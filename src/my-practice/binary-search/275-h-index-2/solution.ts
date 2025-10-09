export function hIndex(citations: number[]): number {
  const n = citations.length;
  let i = n - 1;
  while (i >= 0) {
    const h = n - i;
    if (citations[i] < h) break;
    i--;
  }
  return n - (i + 1);
}

const citations = [0, 1, 3, 5, 6];
console.log(hIndex(citations));
