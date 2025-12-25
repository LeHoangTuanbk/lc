export function numberOfLines(widths: number[], s: string): number[] {
  const res = Array(2).fill(0);
  res[0] = 1;
  let currentLineLength = 0;
  let i = 0;
  const n = s.length;
  while (i < n) {
    const cLength = widths[s[i].charCodeAt(0) - 97];
    if (currentLineLength + cLength <= 100) {
      currentLineLength += cLength;
    } else {
      currentLineLength = cLength;
      res[0]++;
    }
    i++;
  }
  res[1] = currentLineLength;
  return res;
}

const widths = [
    4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10,
  ],
  s = 'bbbcccdddaaa';
console.log(numberOfLines(widths, s));
