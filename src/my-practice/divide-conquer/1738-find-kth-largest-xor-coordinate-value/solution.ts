export function kthLargestValue(matrix: number[][], k: number): number {
  const m = matrix.length;
  const n = matrix[0].length;

  const prefixXor: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
  const values: number[] = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let val = matrix[i][j];
      if (i > 0) val ^= prefixXor[i - 1][j];
      if (j > 0) val ^= prefixXor[i][j - 1];
      if (i > 0 && j > 0) val ^= prefixXor[i - 1][j - 1];
      prefixXor[i][j] = val;
      values.push(val);
    }
  }

  return quickSelect(values, 0, values.length - 1, values.length - k);
}

function quickSelect(nums: number[], left: number, right: number, k: number): number {
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

const matrix = [
    [5, 2],
    [1, 6],
  ],
  k = 1;
console.log(kthLargestValue(matrix, k));
