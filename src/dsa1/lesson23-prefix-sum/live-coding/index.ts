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

function checkSubarraySum(nums: number[], k: number): boolean {}
