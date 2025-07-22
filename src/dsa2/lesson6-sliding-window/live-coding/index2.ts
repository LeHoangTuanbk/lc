function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  const n = arr.length;
  let sum = 0;
  for (let i = 0; i < k - 1; i++) {
    sum += arr[i];
  }

  let res = 0;
  let start = 0;
  while (start < n - k) {
    sum += arr[start + k - 1];
    if (sum > k * threshold) {
      res++;
    }
    start++;
    sum -= arr[start];
  }

  return res;
}

/* 
Example 1:

Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
Output: 3
Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).
Example 2:

Input: arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
Output: 6
Explanation: The first 6 sub-arrays of size 3 have averages greater than 5. Note that averages are not integers.


*/

// function lengthOfLongestSubstring(s: string): number {
//   const n = s.length;
//   const set = new Set<string>();
//   let start = 0,
//     end = -1,
//     maxLength = 0;

//   while (start < n) {}
// }

function lengthOfLongestSubstring2(s: string): number {
  const n = s.length;
  const seen = new Set<string>();
  let res = 0;

  for (let i = 0, j = -1; i < n; i++) {
    while (j + 1 < n && !seen.has(s[j + 1])) {
      j++;
      seen.add(s[j]);
    }
    res = Math.max(res, j - i + 1);
    seen.delete(s[i]);
  }
  return res;
}

/* 
Example 1:
Code anh sao gọn thế nhở. 

Tạo một set gồm các phần tử.
Hai con trỏ start, end chạy. Mở rộng end đến khi bị duplicate thì lại phải co lại chạy thằng start. 

Input: s = "abc abc bb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


*/

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

function checkInclusion(s1: string, s2: string): boolean {
  const n1 = s1.length,
    n2 = s2.length;

  let start = 0;
  while (start < n2 - n1) {
    if (isPermutation(s1, s2.slice(start, start + n1 + 1))) {
      return true;
    } else {
      start++;
    }
  }

  return false;
}

function isPermutation(s1: string, subS2: string) {
  const map = new Map<string, number>();
  for (let c of s1) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }

  for (let c of subS2) {
    if (!map.has(c)) {
      return false;
    }
    map.set(c, map.get(c) - 1);
  }

  for (const val of map.values()) {
    if (val != 0) return false;
  }

  return true;
}

const s1 = 'ab',
  s2 = 'eidbaooo';

console.log(checkInclusion(s1, s2));

function checkInclusion2(s1: string, s2: string): boolean {
  const n = s1.length,
    m = s2.length;
  s1;
  if (n > m) return false;

  const cnt: Record<string, number> = {};

  for (const c of s1) cnt[c]++;

  for (let i = 0; i < n - 1; i++) {
    cnt[s2[i]]--;
  }

  // for(let i = 0; i + n - 1 < n; i+)
}

/* 
Example 1:

Có thể dùng bit mask, bật tắt biến thứ i. Cuối cùng cái mask đó phải là 0 thì mới là permutation. Em đang nghĩ vậy. 

Em thông não rồi ạ. Cách làm này hay thế ạ.  

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false

Sao em thấy

*/
