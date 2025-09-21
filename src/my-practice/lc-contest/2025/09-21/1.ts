export function evenNumberBitwiseORs(nums: number[]): number {
  let res = -1;
  for (const num of nums) {
    if ((num & 1) === 0) {
      if (res == -1) {
        res = num;
      } else {
        res = res | num;
      }
    }
  }
  return res;
}
