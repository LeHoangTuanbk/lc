function shortestPalindrome(s: string): string {
  const MOD = 1_000_000_007;
  const BASE = 131;
  const n = s.length;

  let best = 0;
  let fHash = 0;
  let rHash = 0;
  let power = 1;

  for (let i = 0; i < n; i++) {
    const code = s.charCodeAt(i);
    fHash = (fHash * BASE + code) % MOD;
    rHash = (rHash + power * code) % MOD;
    if (fHash === rHash) {
      best = i + 1;
    }
    power = (power * BASE) % MOD;
  }

  const suffix = s.slice(best);
  return suffix.split('').reverse().join('') + s;
}
