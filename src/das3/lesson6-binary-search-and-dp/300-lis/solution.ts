/* 
dp[i] = length of LIS that ends at i
dp[i] = max(1, dp[j] + 1 for all j < i, a[j] < a[i])

minEndValue[x] = min(nums[i]) so that dp[i] = x;
Vi du: minEndValue[1] = 2 de dp[1] = 1;
Cac gia tri minEndValue se tang dan. 


*/

/* 
Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

0. minEndVales = [-inf]
dp = []

1. minEndVales = [-inf, 10]
dp = [1]

2. minEndVales = [-inf, 9]
dp = [1, 1]

2. minEndVales = [-inf, 2]
dp = [1, 1, 1]

3. 5: 
minEndVales = [-inf, 2, 5]
dp = [1, 1, 1, 2]

4. 3: 
minEndVales = [-inf, 2, 3]
dp = [1, 1, 1, 2, 2]


4. 7: 
minEndVales = [-inf, 2, 3, 7]
dp = [1, 1, 1, 2, 2, 3]

...

4. 18: 
minEndVales = [-inf, 2, 3, 7, 18]
dp = [1, 1, 1, 2, 2, 3, 4, 4]

*/

export function lengthOfLIS(nums: number[]): number {}
