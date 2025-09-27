export function countPairsPowerOfTwo(nums: number[]) {
  const pow2s: number[] = [];
  let pow2 = 1;
  while (pow2 <= 1e6 * 2) {
    pow2s.push(pow2);
    pow2 *= 2;
  }

  const freq = new Map<number, number>();
  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  let res = 0;
  const uniqueNums = Array.from(freq.keys());

  for (const num of uniqueNums) {
    const countNum = freq.get(num);

    for (const target of pow2s) {
      const other = target - num;
      if (!freq.has(other)) continue;

      if (other === num) {
        res += (countNum * (countNum - 1)) / 2 + countNum;
      } else if (other > num) {
        res += countNum * freq.get(other);
      }
    }
  }

  return res;
}
