const isSquare = (x: number): boolean => {
  const root = Math.sqrt(x);
  return Math.abs(root - Math.round(root)) < 1e-9;
};

export function numSquarefulPerms(nums: number[]): number {
  const n = nums.length;

  // DP table: f[mask][last]
  const f: number[][] = Array(1 << n)
    .fill(0)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    f[1 << i][i] = 1;
  }

  for (let i = 0; i < 1 << n; i++) {
    for (let j = 0; j < n; j++) {
      if (f[i][j] === 0) continue;

      for (let k = 0; k < n; k++) {
        if (((i >> k) & 1) === 0 && isSquare(nums[j] + nums[k])) {
          const newMask = i | (1 << k);
          f[newMask][k] += f[i][j];
        }
      }
    }
  }

  let res = 0;
  const fullMask = (1 << n) - 1;
  for (let i = 0; i < n; i++) {
    res += f[fullMask][i];
  }

  const cnt: Map<number, number> = new Map();
  for (const num of nums) {
    cnt.set(num, (cnt.get(num) || 0) + 1);
  }

  const fact: number[] = Array(n + 1).fill(1);
  for (let i = 1; i <= n; i++) {
    fact[i] = fact[i - 1] * i;
  }

  for (const count of cnt.values()) {
    res = Math.floor(res / fact[count]);
  }

  return res;
}
