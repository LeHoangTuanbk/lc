function subarraySum2(nums: number[], k: number): number {
  //Calculate prefix sum
  const n = nums.length;
  const prefixSum: number[] = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }
  prefixSum.shift();
  //

  // 2 points: i,j => traverse all subarray and calculate sum
}

function subarraySum(nums: number[], k: number): number {
  //Calculate prefix sum
  const n = nums.length;
  let sum = 0;
  const cnt = new Map<number, number>();
  let res = 0;

  for (const num of nums) {
    sum += num;
    res += cnt[sum - k];
    cnt[sum]++;
  }
  return res;

  // 2 points: i,j => traverse all subarray and calculate sum
}

function canMakePaliQueries(s: string, queries: number[][]): boolean[] {
  const nMAX = 1e5 + 2;
  const cMAX = 26;
  const cnt: number[][] = Array[nMAX][cMAX];
  const n = s.length;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < 26; j++) {
      cnt[i][j] = cnt[i - 1][j] + (s[i - 1] - 'a') == j;
    }
  }
}

/* 
Example :

Input: s = "abcda", queries = [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]]
Output: [true,false,false,true,true]
Explanation:
queries[0]: substring = "d", is palidrome.
queries[1]: substring = "bc", is not palidrome.
queries[2]: substring = "abcd", is not palidrome after replacing only 1 character.
queries[3]: substring = "abcd", could be changed to "abba" which is palidrome. Also this can be changed to "baab" first rearrange it "bacd" then replace "cd" with "ab".
queries[4]: substring = "abcda", could be changed to "abcba" which is palidrome.
Example 2:

Input: s = "lyb", queries = [[0,1,0],[2,2,1]]
Output: [false,true]

You are given a string s and array queries where queries[i] = [lefti, righti, ki]. We may rearrange the substring s[lefti...righti] for each query and then choose up to ki of them to replace with any lowercase English letter.

Em bị tắc cho biết làm sao để có thể cắt được string ra

Histogram: có đúng 1 chữ có fre: 1, còn lại frequency: chẵn. 

abcd => abba

Số lượng kí tự xuất hiện lẻ lần còn lại / 2 < k

Cảm ơn anh ạ. Hẹn gặp lại anh ạ. 

*/

function minOperations(boxes: string): number[] {
  const n = boxes.length;
  let cnt = 0,
    sum = 0;

  for (let i = 0; i < n; i++) {
    if (boxes[i] == '1') {
      cnt++;
      sum += i;
    }
  }

  const res: number[] = [];
}

/* 
Example 1:

Input: boxes = "110"
Output: [1,1,3]
Explanation: The answer for each box is as follows:
1) First box: you will have to move one ball from the second box to the first box in one operation.
2) Second box: you will have to move one ball from the first box to the second box in one operation.
3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.
Example 2:

Input: boxes = "001011"
Output: [11,8,5,4,3,4]





*/

function findMaxLength(nums: number[]): number {}

/* 
Example 1:

Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
Example 2:

Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Example 3:

Input: nums = [0,1,1,1,1,1,0,0,0]
Output: 6
Explanation: [1,1,1,0,0,0] is the longest contiguous subarray with equal number of 0 and 1.

*/

function checkSubarraySum(nums: number[], k: number): boolean {}
