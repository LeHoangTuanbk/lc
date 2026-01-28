function optimalDivision(nums: number[]): string {
  const n = nums.length;
  if (n === 1) return String(nums[0]);
  if (n === 2) return `${String(nums[0])}/${String(nums[1])}`;

  return `${nums[0]}/(${nums.slice(1).join('/')})`;
}
