type Info = {
  total: number;
  maxPrefix: number;
  maxSuffix: number;
  maxSub: number;
};

export function maxSubArray(nums: number[]): number {
  function solve(l: number, r: number): Info {
    if (l === r) {
      const x = nums[l];
      return {
        total: x,
        maxPrefix: x,
        maxSuffix: x,
        maxSub: x,
      };
    }
    const mid = (l + r) >> 1;
    const left = solve(l, mid);
    const right = solve(mid + 1, r);
    const total = left.total + right.total;

    const maxPrefix = Math.max(left.maxPrefix, left.total + right.maxPrefix);
    const maxSuffix = Math.max(right.maxSuffix, right.total + left.maxSuffix);

    const maxSub = Math.max(left.maxSub, right.maxSub, left.maxSuffix + right.maxPrefix);

    return { total, maxPrefix, maxSuffix, maxSub };
  }

  return solve(0, nums.length - 1).maxSub;
}
