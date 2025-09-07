export function countBinaryPalindromes2(n: number): number {
  if (n == 0) return 1;
  if (n == 1) return 2;
  const limit = BigInt(n);
  let count = 0n;

  function createPalindrome(prefix: bigint, isOdd: boolean): bigint {
    let res = prefix;
    let temp = prefix;

    if (isOdd) temp = temp / 2n;

    while (temp > 0n) {
      res = res * 2n + (temp % 2n);
      temp = temp / 2n;
    }
    return res;
  }

  let i = 1n;
  while (true) {
    const oddPalin = createPalindrome(i, true);
    if (oddPalin > limit) break;
    count++;

    const evenPalin = createPalindrome(i, false);
    if (evenPalin <= limit) count++;

    i++;
  }

  return Number(++count);
}

function countBinaryPalindromes3(n: number | bigint): number {
  if (n == 0) return 1;
  if (n == 1) return 2;
  const limit = BigInt(n);
  let count = 0;

  if (limit >= 0n) count++;

  const maxBits = limit.toString(2).length;

  for (let len = 1; len <= maxBits; len++) {
    const halfLen = Math.floor((len + 1) / 2);
    const start = 1 << (halfLen - 1);
    const end = 1 << halfLen;

    for (let prefix = start; prefix < end; prefix++) {
      let bin = prefix.toString(2);
      let rev = bin.split('').reverse().join('');

      if (len % 2 === 1) rev = rev.slice(1);

      const fullBin = bin + rev;
      const num = BigInt('0b' + fullBin);
      if (num <= limit) {
        count++;
      }
    }
  }

  return count;
}

function countBinaryPalindromes4(n: number | bigint): number {
  if (n == 0) return 1;
  if (n == 1) return 2;

  const limit = BigInt(n);
  let count = 0n;

  function makePalindrome(x: number, odd: boolean): bigint {
    let res = BigInt(x);
    let y = x;

    if (odd) y = Math.floor(x / 2);

    while (y > 0) {
      res = res * 2n + BigInt(y % 2);
      y = Math.floor(y / 2);
    }

    return res;
  }

  const maxBits = limit.toString(2).length;

  for (let bits = 1; bits <= maxBits; bits++) {
    const halfLen = Math.floor((bits + 1) / 2);
    const start = 1 << (halfLen - 1);
    const end = 1 << halfLen;

    for (let prefix = start; prefix < end; prefix++) {
      const oddPalin = makePalindrome(prefix, bits % 2 === 1);
      if (oddPalin <= limit) count++;
    }
  }

  return Number(++count);
}

const n = 34359738367;
console.log(countBinaryPalindromes(n));
