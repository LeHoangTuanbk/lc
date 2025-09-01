export function reorderSpaces(text: string): string {
  const words = text.split(/\s+/);
  const numWords = words.length;
  const totalSpaces = text.split('').filter((c) => c == ' ').length;

  if (numWords === 1) {
    return words[0] + ' '.repeat(totalSpaces);
  }

  const spaceBetween = Math.floor(totalSpaces / (numWords - 1));
  const spaceRemain = totalSpaces % (numWords - 1);

  return words.join(' '.repeat(spaceBetween)) + ' '.repeat(spaceRemain);
}

/* 
Example 1:

Input: text = "  this   is  a sentence "
Output: "this   is   a   sentence"
Explanation: There are a total of 9 spaces and 4 words. We can evenly divide the 9 spaces between the words: 9 / (4-1) = 3 spaces.

*/

const text = '  this   is  a sentence ';
console.log(reorderSpaces(text));
