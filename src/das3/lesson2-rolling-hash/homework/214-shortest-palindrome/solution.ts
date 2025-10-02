const MOD1 = 1_000_000_000_007;
const MOD2 = 1_000_000_000_009;
const BASE1 = 131;
const BASE2 = 313;

function buildDoubleHash(s: string) {
  const n = s.length;
  const h1 = Array(n + 1).fill(0),
    h2 = Array(n + 1).fill(0);
  const p1 = Array(n + 1).fill(1),
    p2 = Array(n + 1).fill(1);

  for (let i = 0; i < n; i++) {
    const code = s.charCodeAt(i) - '0'.charCodeAt(0) + 1;
    h1[i + 1] = (h1[i] * BASE1 + code) % MOD1;
    h2[i + 1] = (h2[i] * BASE2 + code) % MOD2;
    p1[i + 1] = (p1[i] * BASE1) % MOD1;
    p2[i + 1] = (p2[i] * BASE2) % MOD2;
  }

  function getHash(l: number, r: number) {
    const len = r - l + 1;
    const x1 = (h1[r + 1] - ((h1[l] * p1[len]) % MOD1) + MOD1) % MOD1;
    const x2 = (h2[r + 1] - ((h2[l] * p2[len]) % MOD2) + MOD2) % MOD2;
    return `${x1},${x2}`;
  }

  return { getHash };
}

export function shortestPalindrome(s: string): string {
  const n = s.length;

  if (n <= 1) return s;
  const { getHash: getF } = buildDoubleHash(s);
  const { getHash: getR } = buildDoubleHash(s.split('').reverse().join(''));

  let best = 0;
  for (let i = 0; i < n; i++) {
    const h1 = getF(0, i);
    const h2 = getR(n - 1 - i, n - 1);
    if (h1 === h2) {
      best = i + 1;
    }
  }

  const suffix = s.slice(best);
  return suffix.split('').reverse().join('') + s;
}

const s = 'abbabaab';
console.log(shortestPalindrome(s));
/* 
baababbabbabaab
baababbabaab
baababbabbabaab
baababbabbabaab
*/
