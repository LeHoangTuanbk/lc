export function minimumOperations(nums: number[]): number {
  return new Set(nums.filter((num) => num)).size;
}
