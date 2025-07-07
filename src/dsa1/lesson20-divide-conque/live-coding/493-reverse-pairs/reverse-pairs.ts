function reversePairs(nums: number[]): number {
  function mergeSortCount(nums: number[], l: number, r: number) {
    if (l == r) return 0;
    const m = Math.floor((l + r) / 2);
    const countLeft = mergeSortCount(nums, l, m);
    const countRight = mergeSortCount(nums, m + 1, r);
    const countCross = mergeAndCount(nums, l, m, r);
    return countLeft + countRight + countCross;
  }

  function mergeAndCount(nums: number[], l: number, m: number, r: number): number {
    let count = 0;
    let j = m + 1;
    for (let i = l; i < m + 1; i++) {
      while (j <= r && nums[i] > 2 * nums[j]) {
        j++;
      }
      count += j - (m + 1);
    }

    const merged: number[] = [];
    let i = l;
    j = m + 1;
    while (i <= m && j <= r) {
      if (nums[i] <= nums[j]) {
        merged.push(nums[i++]);
      } else {
        merged.push(nums[j++]);
      }
    }

    while (i <= m) merged.push(nums[i++]);
    while (j <= r) merged.push(nums[j++]);

    for (let k = 0; k < merged.length; k++) {
      nums[l + k] = merged[k];
    }
    return count;
  }

  return mergeSortCount(nums, 0, nums.length - 1);
}
