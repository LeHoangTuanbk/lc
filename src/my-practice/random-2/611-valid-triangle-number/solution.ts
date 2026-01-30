function checkTriangle(a: number, b: number, c: number): boolean {
  return a + b > c && Math.abs(a - b) < c;
}

export function triangleNumber(nums: number[]): number {
  const n = nums.length;
  let count = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (checkTriangle(nums[i], nums[j], nums[k])) {
          count++;
        }
      }
    }
  }
  return count;
}
