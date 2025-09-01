export function divideString(s: string, k: number, fill: string): string[] {
  const n = s.length;
  const res: string[] = [];
  let i = 0;
  for (; i < n - k; i += k) {
    res.push(s.slice(i, i + k));
  }
  const lastWord = s.slice(i);
  res.push(lastWord + fill.repeat(k - lastWord.length));
  return res;
}

export function divideString2(s: string, k: number, fill: string): string[] {
  const n = s.length;
  const res: string[] = [];
  for (let i = 0; i < n; i += k) {
    res.push(s.slice(i, i + k));
  }
  let restFill = k - res.at(-1).length;
  res[res.length - 1] = res.at(-1) + fill.repeat(restFill);
  return res;
}
const s = 'abc def ghi j',
  k = 3,
  fill = 'x';
console.log(divideString(s, k, fill)); //["abc","def","ghi","jxx"]
/* 
Example 1:

Input: s = "abc def ghi m", k = 3, fill = "x"
Output: ["abc","def","ghi"]
Explanation:
The first 3 characters "abc" form the first group.
The next 3 characters "def" form the second group.
The last 3 characters "ghi" form the third group.
Since all groups can be completely filled by characters from the string, we do not need to use fill.
Thus, the groups formed are "abc", "def", and "ghi".
Example 2:

Input: s = "abcdefghij", k = 3, fill = "x"
Output: ["abc","def","ghi","jxx"]
Explanation:
Similar to the previous example, we are forming the first three groups "abc", "def", and "ghi".
For the last group, we can only use the character 'j' from the string. To complete this group, we add 'x' twice.
Thus, the 4 groups formed are "abc", "def", "ghi", and "jxx".


*/
