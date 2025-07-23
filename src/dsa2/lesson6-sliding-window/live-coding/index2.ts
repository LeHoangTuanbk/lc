function characterReplacement(s: string, k: number): number {
  const n = s.length;

  const countChar: Record<string, number> = {};
  let start = 0,
    maxCount = 0,
    maxLen = 0;

  for (let end = 0; end < n; end++) {
    const c = s[end];
    countChar[c] = (countChar[c] || 0) + 1;
    maxCount = Math.max(maxCount, countChar[c]);

    while (end - start + 1 - maxCount > k) {
      countChar[s[start]]--;
      start++;
    }

    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
}

/* 
Example 1:
Code Python này thấy
Ý tưởng greedy với mỗi sub string tính freq, xong biến đổi về thằng max freq của characters trong đó đúng không? 

Em thấy có thể dùng lưu luôn một cái maxCount của characters trong subarray, sau đó vừa duyệt, vừa update cái max đó ạ. Lấy luôn từ cái idea của cập nhật freq

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Vâng ạ. Em thông não thêm chút rồi ạ. 

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.

Phân tích này hay ạ.

*/
