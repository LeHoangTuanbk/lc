export function readBinaryWatch(turnedOn: number): string[] {
  let res: string[] = [];
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      if (countBits(h) + countBits(m) === turnedOn) {
        res.push(`${convertDecimalStringHours(h)}:${convertDecimalStringMinutes(m)}`);
      }
    }
  }
  return res;
}

function convertDecimalStringHours(x: number) {
  return x.toString();
}

function convertDecimalStringMinutes(x: number) {
  if (x < 10) return '0' + x.toString();
  return x.toString();
}

function countBits(x: number): number {
  let count = 0;
  while (x > 0) {
    count += x & 1;
    x = x >> 1;
  }
  return count;
}
