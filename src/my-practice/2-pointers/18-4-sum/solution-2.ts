export function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  return kSum(nums, target, 4, 0);
}

function kSum(nums: number[], target: number, k: number, start: number) {
  const res: number[][] = [];
  const n = nums.length;

  if (k == 2) {
    let left = start,
      right = n - 1;
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === target) {
        res.push([nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  } else {
    for (let i = start; i <= n - k; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;

      const subSets = kSum(nums, target - nums[i], k - 1, i + 1);
      for (const subset of subSets) {
        res.push([nums[i], ...subset]);
      }
    }
  }

  return res;
}

const nums = [1, 0, -1, 0, -2, 2],
  target = 0;
console.log(fourSum(nums, target));
