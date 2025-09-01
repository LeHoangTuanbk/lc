export function reorderSpaces(text: string): string {
  const words = text.trim().split(/\s+/);
  const n = words.length;
  const totalSpaces = text.length - words.join('').length;
  if (n == 1) return words[0] + ' '.repeat(totalSpaces);
  const gap = Math.floor(totalSpaces / (n - 1));
  const extraGap = totalSpaces % (n - 1);
  return words.join(' '.repeat(gap)) + ' '.repeat(extraGap);
}

// const text = '  this   is  a sentence ';
// console.log(reorderSpaces(text));

const text2 = '  hello';
console.log(reorderSpaces(text2));
/* 
Example 1:

Input: text = "  this   is  a sentence "
Output: "this   is   a   sentence"
Explanation: There are a total of 9 spaces and 4 words. We can evenly divide the 9 spaces between the words: 9 / (4-1) = 3 spaces.
Example 2:

Input: text = " practice   makes   perfect"
Output: "practice   makes   perfect "
Explanation: There are a total of 7 spaces and 3 words. 7 / (3-1) = 3 spaces plus 1 extra space. We place this extra space at the end of the string.

*/
