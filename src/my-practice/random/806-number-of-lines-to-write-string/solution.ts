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

function lemonadeChange(bills: number[]): boolean {
  const currentMoney = {
    5: 0,
    10: 0,
    20: 0,
  };
  for (const bill of bills) {
    if (bill === 5) {
      currentMoney[5]++;
    } else if (bill === 10) {
      if (currentMoney[5] === 0) return false;
      currentMoney[5]--;
      currentMoney[10]++;
    } else if (bill === 20) {
      if (currentMoney[5] >= 3) {
        currentMoney[20]++;
        currentMoney[5] = currentMoney[5] - 3;
        continue;
      }
      if (currentMoney[5] >= 2 && currentMoney[10] >= 1) {
        currentMoney[20]++;
        currentMoney[5] = currentMoney[5] - 2;
        currentMoney[10] = currentMoney[10] - 1;
      }
      return false;
    }
  }
  return true;
}
