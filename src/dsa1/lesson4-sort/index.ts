//1
function targetIndices(nums: number[], target: number): number[] {
  nums = nums.sort((a, b) => a - b);
  let res: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      res.push(i);
    }
  }
  return res;
}
/*
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
*/

function smallerNumbersThanCurrent2(nums: number[]): number[] {
  let numsCopy = [...nums];
  nums = nums.sort((a, b) => a - b);

  let res = [];
  for (let items of numsCopy) {
    for (let i = 0; i < nums.length; i++) {
      if ((nums[i] = items)) {
        res.push(i);
        break;
      }
    }
  }
  return res;
}

//Student score
/*
Input: score = [[10,6,9,1],[7,5,11,2],[4,8,3,15]], k = 2
Output: [[7,5,11,2],[10,6,9,1],[4,8,3,15]]
*/
function sortTheStudents(score: number[][], k: number): number[][] {
  return score.sort((a, b) => a[k] - a[k]);
}

function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  let count = new Array(1001);
}
