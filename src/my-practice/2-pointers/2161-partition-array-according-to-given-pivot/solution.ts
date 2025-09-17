export function pivotArray(nums: number[], pivot: number): number[] {
  const lessThan: number[] = [];
  const equal: number[] = [];
  const greaterThan: number[] = [];
  for (const num of nums) {
    if (num < pivot) {
      lessThan.push(num);
    } else if (num === pivot) {
      equal.push(num);
    } else {
      greaterThan.push(num);
    }
  }
  return [...lessThan, ...equal, ...greaterThan];
}
