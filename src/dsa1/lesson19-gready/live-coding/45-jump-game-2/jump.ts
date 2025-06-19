export function jump1(nums: number[]): number {
  let res = 0;
  let maxReach = nums[0];
  for (let i = 0; i < nums.length; ) {
    if (i == nums.length - 1) return res;
    const maxJump = i + nums[i];
    res++;
    if (maxJump >= nums.length - 1) return res;
    let j = i + 1;
    while (j <= maxJump) {
      maxReach = Math.max(maxReach, j + nums[j]);
      j++;
    }
    res++;
    i = maxReach;
  }
  return res;
}

export function jump32(nums: number[]): number {
  //Always can jump
  //Greedy, calculate max can jump each step
  let res = 0;
  let maxReach = nums[0];
  for (let i = 0; i < nums.length; ) {
    if (i === nums.length - 1) return res;
    const maxJump = i + nums[i];
    let j = i;
    while (j <= maxJump) {
      maxReach = Math.max(maxReach, j + nums[j]);
      j++;
    }
    res++;
    i = maxReach;
  }
  return res;
}

const nums = [2, 3, 1, 1, 4];
const expectedOutput = 2;
jump(nums);
/* 
Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [2,3,0,1,4]
Output: 2

Input: nums = [2,3,1,1,4,2,3,6]
Output: 2

// Always can jump
*/

function jump3(nums: number[]): number {
  const n = nums.length;
  let i = 0,
    curStep = 0,
    nextStep = 0,
    res = 0;
  while (i < n - 1) {
    nextStep = Math.max(nextStep, i + nums[i]);
    if (i === curStep) {
      res++;
      curStep = nextStep;
    }
    i++;
  }
  return res;
}

export function jump6(nums: number[]): number {
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
    }
  }

  return jumps;
}

export function jump(nums: number[]): number {
  let jumpTime = 0,
    currentEnd = 0,
    maxReach = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    maxReach = Math.max(maxReach, i + nums[i]);
    if (i === currentEnd) {
      jumpTime++;
      currentEnd = maxReach;
    }
  }

  return jumpTime;
}
