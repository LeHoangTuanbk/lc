const Dir = {
  Left: 'Left',
  Right: 'Right',
} as const;

type DirType = (typeof Dir)[keyof typeof Dir];

export function countValidSelections(nums: number[]): number {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (checkZero([...nums], i, Dir.Left)) {
        res++;
      }
      if (checkZero([...nums], i, Dir.Right)) {
        res++;
      }
    }
  }
  return res;
}

function checkZero(nums: number[], curr: number, dir: DirType): boolean {
  while (curr >= 0 && curr < nums.length) {
    if (nums[curr] === 0) {
      if (dir === Dir.Left) curr--;
      else curr++;
    } else {
      nums[curr]--;
      dir = dir === Dir.Left ? Dir.Right : Dir.Left;
      if (dir === Dir.Left) curr--;
      else curr++;
    }
  }

  return nums.reduce((a, b) => a + b, 0) === 0;
}

const nums = [1, 0, 2, 0, 3];
console.log(countValidSelections(nums));
/* 
Example 1:

Input: nums = [1,0,2,0,3]

Output: 2

Explanation:

The only possible valid selections are the following:

Choose curr = 3, and a movement direction to the left.
[1,0,2,0,3] -> [1,0,2,0,3] -> [1,0,1,0,3] -> [1,0,1,0,3] -> [1,0,1,0,2] -> [1,0,1,0,2] -> [1,0,0,0,2] -> [1,0,0,0,2] -> [1,0,0,0,1] -> [1,0,0,0,1] -> [1,0,0,0,1] -> [1,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,0].
Choose curr = 3, and a movement direction to the right.
[1,0,2,0,3] -> [1,0,2,0,3] -> [1,0,2,0,2] -> [1,0,2,0,2] -> [1,0,1,0,2] -> [1,0,1,0,2] -> [1,0,1,0,1] -> [1,0,1,0,1] -> [1,0,0,0,1] -> [1,0,0,0,1] -> [1,0,0,0,0] -> [1,0,0,0,0] -> [1,0,0,0,0] -> [1,0,0,0,0] -> [0,0,0,0,0].

*/
