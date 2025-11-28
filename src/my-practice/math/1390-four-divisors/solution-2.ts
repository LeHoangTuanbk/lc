export function sumFourDivisors(nums: number[]): number {
  let res = 0;
  for (const num of nums) {
    let lastDivisor = 0;
    let d = 2;
    while (d * d <= num) {
      if (num % d === 0) {
        if (lastDivisor === 0) {
          lastDivisor = d;
        } else {
          lastDivisor = 0;
          break;
        }
      }
      d++;
    }

    if (lastDivisor !== 0 && lastDivisor * lastDivisor !== num) {
      const p = lastDivisor;
      const q = num / p;
      res += 1 + p + q + num;
    }
  }
  return res;
}
const nums = [21, 4, 7];
console.log(sumFourDivisors(nums));
