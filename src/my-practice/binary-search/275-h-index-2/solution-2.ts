export function hIndex(citations: number[]): number {
  const n = citations.length;
  let lo = 0,
    hi = n - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (isGoodHIndex(citations, mid)) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return citations[lo] >= n - lo ? n - lo : 0;
}

function isGoodHIndex(citation: number[], idx: number) {
  const n = citation.length;
  const h = n - idx;
  return citation[idx] >= h;
}

const citations = [0];
console.log(hIndex(citations));
