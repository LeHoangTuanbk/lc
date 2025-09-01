export function fullJustify(words: string[], maxWidth: number): string[] {
  const output: string[] = [];
  let lineWords: string[] = [];
  let lineLen = 0;

  for (const word of words) {
    if (lineLen + word.length + lineWords.length > maxWidth) {
      output.push(textJustify(lineWords, maxWidth));
      lineWords = [];
      lineLen = 0;
    }
    lineWords.push(word);
    lineLen += word.length;
  }

  output.push(leftJustify(lineWords, maxWidth));
  return output;
}

function textJustify(words: string[], maxWidth: number): string {
  const totalLen = words.reduce((sum, w) => sum + w.length, 0);
  const totalSpaces = maxWidth - totalLen;

  if (words.length === 1) {
    return words[0] + ' '.repeat(totalSpaces);
  }

  const spaceBetween = Math.floor(totalSpaces / (words.length - 1));
  let spaceRemain = totalSpaces % (words.length - 1);
  let res = words[0];

  for (let i = 1; i < words.length; i++) {
    const extra = spaceRemain > 0 ? 1 : 0;
    spaceRemain--;
    res += ' '.repeat(spaceBetween + extra) + words[i];
  }
  return res;
}

function leftJustify(words: string[], maxWidth: number): string {
  const text = words.join(' ');
  return text + ' '.repeat(maxWidth - text.length);
}
/* 
Example 1:

Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
Example 2:

Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.
Example 3:

Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]

*/
