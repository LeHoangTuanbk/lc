function wiggleSort(nums: number[]): void {
  const n = nums.length;

  const median = findKthLargest([...nums], Math.floor((n + 1) / 2));
  // virtual index
  const mapIndex = (i: number) => {
    return (1 + 2 * i) % (n | 1);
  };

  let left = 0,
    right = n - 1,
    i = 0;

  while (i <= right) {
    const mappedI = mapIndex(i);
    const mappedLeft = mapIndex(left);
    const mappedRight = mapIndex(right);

    if (nums[mappedI] > median) {
      [nums[mappedI], nums[mappedLeft]] = [nums[mappedLeft], nums[mappedI]];
      left++;
      i++;
    } else if (nums[mappedI] < median) {
      [nums[mappedI], nums[mappedRight]] = [nums[mappedRight], nums[mappedI]];
      right--;
    } else {
      i++;
    }
  }
}

function findKthLargest(nums: number[], k: number): number {
  return quickSelect(nums, 0, nums.length - 1, nums.length - k);
}

function quickSelect(nums: number[], left: number, right: number, k: number): number {
  if (left === right) return nums[left];

  const pivotIndex = partition(nums, left, right);
  if (k === pivotIndex) {
    return nums[k];
  } else if (k < pivotIndex) {
    return quickSelect(nums, left, pivotIndex - 1, k);
  } else {
    return quickSelect(nums, pivotIndex + 1, right, k);
  }
}

function partition(nums: number[], left: number, right: number): number {
  const pivot = nums[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (nums[j] <= pivot) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }

  [nums[i], nums[right]] = [nums[right], nums[i]];
  return i;
}
