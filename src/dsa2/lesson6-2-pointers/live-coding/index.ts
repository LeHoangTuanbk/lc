function removeDuplicates(nums: number[]): number {
  const n = nums.length;
  if (n <= 2) return n;

  let cnt = 1,
    j = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i] === nums[i - 1]) cnt++;
    else cnt = 1;

    if (cnt <= 2) {
      nums[j] = nums[i];
      j++;
    }
  }
  return cnt;
}


/* 
Example 1:

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) <= 2:
            return len(nums)
            
        left = 2 
        for right in range(2, len(nums)):
            if nums[right] != nums[left -2]: 
                nums[left] = nums[right]
                left +=1
            
        return left



/* 
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
*/

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
