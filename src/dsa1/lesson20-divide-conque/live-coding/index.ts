export function findKthLargest2(nums: number[], k: number): number {
  k = nums.length - k;

  function quickSelect(left: number, right: number) {
    let pivot = nums[right];
    let l = left;
    let r = right;
    while (l <= r) {
      while (l <= r && nums[l] < pivot) l++;
      while (l <= r && nums[r] > pivot) r++;
      if (l <= r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
        r--;
      }
    }
    if (k <= r) return quickSelect(left, r);
    else if (k > r) return quickSelect(l, right);
    else return nums[k];
  }

  return quickSelect(0, nums.length - 1);
}

export function findKthLargest(nums: number[], k: number): number {
  const target = nums.length - k;

  function quickSelect(left: number, right: number): number {
    const pivot = nums[Math.floor((left + right) / 2)];
    let l = left;
    let r = right;

    while (l <= r) {
      while (nums[l] < pivot) l++;
      while (nums[r] > pivot) r--;
      if (l <= r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
        r--;
      }
    }

    // Now l is the first index in the right half
    if (target <= r) return quickSelect(left, r);
    else if (target >= l) return quickSelect(l, right);
    else return nums[target];
  }

  return quickSelect(0, nums.length - 1);
}

class _Node {
  val: boolean;
  isLeaf: boolean;
  topLeft: Node | null;
  topRight: Node | null;
  bottomLeft: Node | null;
  bottomRight: Node | null;
  constructor(
    val?: boolean,
    isLeaf?: boolean,
    topLeft?: Node,
    topRight?: Node,
    bottomLeft?: Node,
    bottomRight?: Node,
  ) {
    this.val = val === undefined ? false : val;
    this.isLeaf = isLeaf === undefined ? false : isLeaf;
    this.topLeft = topLeft === undefined ? null : topLeft;
    this.topRight = topRight === undefined ? null : topRight;
    this.bottomLeft = bottomLeft === undefined ? null : bottomLeft;
    this.bottomRight = bottomRight === undefined ? null : bottomRight;
  }
}

function construct(grid: number[][]): _Node | null {
  function isLeafNode(grid: number[][], i: number, j: number, w: number) {
    let val = grid[i][j];
    for (let x = i; i < i + w; i++) {
      for (let y = j; j < j + w; j++) {
        if (grid[x][y] != val) return -1;
      }
    }
    return val;
  }

  function createNode(grid: number[][], i: number, j: number, w: number) {
    let val = isLeafNode(grid, i, j, w);
    if (val != -1) {
      return new _Node(val, true, null, null, null, null);
    }
    const node = new _Node(val, false, null, null, null, null);
  }

  const n = grid.length;
  let root = createNode(grid, 0, 0, n);
  return root;
}
// Cảm giác bài này đọc vẫn chưa hiểu đề lắm ạ.

export function reversePairs(nums: number[]): number {
  function mergeSort(nums: number[], l, r) {
    if (l == r) return 0;
    let m = Math.ceil((l + r) / 2);
    let countLeft = countPairs(nums, l, m);
    let countRight = countPairs(nums, m + 1, r);
    let countCross = mergeAndCount(nums, l, m, r);

    return countLeft + countRight + countCross;
  }

  function countPairs();

  function mergeAndCount(nums: number[], l: number, m: number, r: number) {
    let cnt = 0;
    let j = m + 1;
    for (let i = l; i < m + 1; i++) {
      while (j <= r && 2 * nums[j] < nums[j]) {
        j++;
      }
      cnt += j - m - 1;
    }

    let a = [];
    let i = l;
    j = m + 1;
    while (l < m && j <= r) {
      if (nums[i] < nums[j]) {
        a.push(nums[i]);
        i++;
      } else {
        a.push(nums[j]);
        j++;
      }
    }
    if (j == m + 1) {
      a.push(...nums.slice(j, r + 1));
    }
    if (j === r + 1) {
      a.push(...nums.slice(i, m + 1));
    }

    for (let i = l; i < r + 1; i++) {
      nums[i] = a[i - 1];
    }
    return cnt;
  }

  return mergeSort(nums, 0, nums.length - 1);
}
/* 
Example 1:

Input: nums = [1,3,2,3,1]
Output: 2
Explanation: The reverse pairs are:
(1, 4) --> nums[1] = 3, nums[4] = 1, 3 > 2 * 1
(3, 4) --> nums[3] = 3, nums[4] = 1, 3 > 2 * 1
Example 2:

Input: nums = [2,4,3,5,1]
Output: 3
Explanation: The reverse pairs are:
(1, 4) --> nums[1] = 4, nums[4] = 1, 4 > 2 * 1
(2, 4) --> nums[2] = 3, nums[4] = 1, 3 > 2 * 1
(3, 4) --> nums[3] = 5, nums[4] = 1, 5 > 2 * 1

*/
