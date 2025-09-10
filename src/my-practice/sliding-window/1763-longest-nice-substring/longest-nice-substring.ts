export function longestNiceSubstring(s: string): string {
  const n = s.length;
  let res = '';
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const subString = s.slice(i, j + 1);
      if (checkNiceString(subString) && subString.length > res.length) {
        res = subString;
        console.log(subString);
      }
    }
  }
  return res;
}

function checkNiceString(s: string) {
  const cSet = new Set(s);
  for (const c of cSet) {
    const upper = c.toLowerCase();
    const lower = c.toUpperCase();
    if (!(cSet.has(upper) && cSet.has(lower))) {
      return false;
    }
  }
  return true;
}

const s = 'qQUjJ';
console.log(checkNiceString(s));
console.log(longestNiceSubstring(s));
/* 
Example 1:

Input: s = "YazaAay"
Output: "aAa"
Explanation: "aAa" is a nice string because 'A/a' is the only letter of the alphabet in s, and both 'A' and 'a' appear.
"aAa" is the longest nice substring.
Example 2:

Input: s = "Bb"
Output: "Bb"
Explanation: "Bb" is a nice string because both 'B' and 'b' appear. The whole string is a substring.
Example 3:

Input: s = "c"
Output: ""
Explanation: There are no nice substrings.

*/
