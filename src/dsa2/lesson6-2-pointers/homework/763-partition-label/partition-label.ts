export function partitionLabels(s: string): number[] {
  const last = Array(26).fill(-1);
  for (let i = 0; i < s.length; i++) {
    last[s.charCodeAt(i) - 97] = i;
  }

  const res: number[] = [];
  let start = 0,
    end = 0;

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, last[s.charCodeAt(i) - 97]);
    if (i == end) {
      res.push(end - start + 1);
      start = i + 1;
    }
  }

  return res;
}
/* 
Example 1:

Input: s = "ababcbaca defegde hijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
Example 2:

Input: s = "eccbbbbdec"
Output: [10]

*/
