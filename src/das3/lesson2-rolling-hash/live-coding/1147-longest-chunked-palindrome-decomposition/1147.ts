const MOD = 2_147_483_647n; // số nguyên tố lớn (2^31 - 1)
const BASE = 131n; // base lớn, giảm xác suất collision

function buildHashPrefix(text: string) {
  const n = text.length;
  text = ' ' + text; // index từ 1

  const hashP: bigint[] = Array(n + 1).fill(0n);
  const power: bigint[] = Array(n + 1).fill(1n);

  for (let i = 1; i <= n; i++) {
    const index = BigInt(text.charCodeAt(i) - 'a'.charCodeAt(0) + 1);
    hashP[i] = (hashP[i - 1] * BASE + index) % MOD;
    power[i] = (power[i - 1] * BASE) % MOD;
  }

  function getHash(l: number, r: number): bigint {
    const len = BigInt(r - l + 1);
    return (hashP[r] - ((hashP[l - 1] * power[Number(len)]) % MOD) + MOD) % MOD;
  }

  return { getHash };
}

function getShortestCommonPrefix(
  getHash: (l: number, r: number) => bigint,
  start: number,
  end: number,
): [number, number, boolean] {
  for (let i = start; i < end; i++) {
    const size = i - start + 1;
    const prefix = getHash(start, i);
    const suffix = getHash(end - size + 1, end);
    if (prefix == suffix) {
      return [i + 1, end - size, true];
    }
  }

  return [start, end, false];
}

export function longestDecomposition(text: string): number {
  const n = text.length;
  const { getHash } = buildHashPrefix(text);

  let start = 1;
  let end = n;
  let ans = 0;

  while (start < end) {
    const [newStart, newEnd, found] = getShortestCommonPrefix(getHash, start, end);

    if (found) {
      ans += 2;
      start = newStart;
      end = newEnd;
    } else {
      break;
    }
  }

  if (start <= end) {
    ans += 1;
  }

  return ans;
}

const text = 'ghiabcdefhelloadamhelloabcdefghi';
console.log(longestDecomposition(text));
