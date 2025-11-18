export function wonderfulSubstrings(word: string): number {
  // a b c d e f g h i j
  const freq = new Array(1 << 10).fill(0);
  let mask = 0;
  let res = 0;

  freq[0] = 1;

  for (const ch of word) {
    const bit = ch.charCodeAt(0) - 97;
    mask ^= 1 << bit;

    // case 1: all even substring
    res += freq[mask];

    // case 2: exactly 1 odd -> flip one bit
    for (let k = 0; k < 10; k++) {
      res += freq[mask ^ (1 << k)];
    }

    freq[mask]++;
  }

  return res;
}
