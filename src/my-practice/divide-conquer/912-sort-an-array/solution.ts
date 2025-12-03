export function sortArray(nums: number[]): number[] {
  if (nums.length == 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const left = sortArray(nums.slice(0, mid));
  const right = sortArray(nums.slice(mid));
  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const n = left.length,
    m = right.length;
  let i = 0,
    j = 0;
  const res: number[] = [];
  while (i < n && j < m) {
    if (left[i] < right[j]) {
      res.push(left[i++]);
    } else {
      res.push(right[j++]);
    }
  }

  while (i < n) {
    res.push(left[i++]);
  }
  while (j < m) {
    res.push(right[j++]);
  }
  return res;
}

const nums = [5, 2, 3, 1];
console.log(sortArray(nums));
