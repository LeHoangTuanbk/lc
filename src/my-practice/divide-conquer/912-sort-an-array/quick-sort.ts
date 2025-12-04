export function sortArray(nums: number[]): number[] {
  return quickSortRandomPivot(nums);
}

function quickSortSimple(nums: number[]): number[] {
  if (nums.length <= 1) return nums;
  const n = nums.length;
  const pivot = nums[n - 1];

  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < n - 1; i++) {
    if (nums[i] <= pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return [...quickSortSimple(left), pivot, ...quickSortSimple(right)];
}

function quickSortRandomPivot(nums: number[]): number[] {
  if (nums.length <= 1) return nums;
  const set = new Set(nums);
  if (set.size == 1) return nums;

  // Chọn pivot ngẫu nhiên
  const randomIndex = Math.floor(Math.random() * nums.length);
  const pivot = nums[randomIndex];

  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === randomIndex) continue; // Bỏ qua pivot

    if (nums[i] <= pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return [...quickSortRandomPivot(left), pivot, ...quickSortRandomPivot(right)];
}

const nums = [5, 2, 3, 1];
console.log(sortArray(nums));
