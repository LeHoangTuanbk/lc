export function smallestDivisor(nums: number[], threshold: number): number {
  let left = 1,
    high = Math.max(...nums);

  function isLessThanOrEqualThreshold(divisor: number): boolean {
    let count = 0;
    for (const num of nums) {
      count += Math.ceil(num / divisor);
    }
    return count <= threshold;
  }

  while (left < high) {
    const mid = left + Math.floor((high - left) / 2);
    if (isLessThanOrEqualThreshold(mid)) {
      high = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

const nums = [1, 2, 5, 9],
  threshold = 6;
console.log(smallestDivisor(nums, threshold));
