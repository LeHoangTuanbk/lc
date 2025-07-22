function numSubseq(nums: number[], target: number): number {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const tempNums = nums.slice(i, j + 1);
      const min = 
    }
  }
}

function isSatisfiedSum(nums: number[], i: number, j: number, target: number) {
  
}

function pow(x : number, n: number) {
  if(n === 0)
}

function numSubseq2(nums: number[], target: number): number {
  const n = nums.length;
  nums.sort((a, b) => a - b );
  let i = 0, j = n - 1, res = 0;
  const MOD = 1e9 + 7;
  while(i <= j) {
    if(nums[i] + nums[j] > target) {
      j--;
    } else {
      res += Math.pow(2, j - i)
      res %= MOD;
      i++
    }
  }
  return res;
}

/* 
Example 1:

Input: nums = [3,5,6,7], target = 9
Output: 4
Explanation: There are 4 subsequences that satisfy the condition.
[3] -> Min value + max value <= target (3 + 3 <= 9)
[3,5] -> (3 + 5 <= 9)
[3,5,6] -> (3 + 6 <= 9)
[3,6] -> (3 + 6 <= 9)
Example 2:

Input: nums = [3,3,6,8], target = 10
Output: 6
Explanation: There are 6 subsequences that satisfy the condition. (nums can have repeated numbers).
[3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]
Example 3:

Input: nums = [2,3,3,4,6,7], target = 12
Output: 61
Explanation: There are 63 non-empty subsequences, two of them do not satisfy the condition ([6,7], [7]).
Number of valid subsequences (63 - 2 = 61).
*/
