export function fullJustify(words: string[], maxWidth: number): string[] {
  // Split
  let curLine = words[0];
  let output: string[] = [];
  for (let i = 1; i <= words.length; i++) {
    const word = words[i];
    if (curLine.length + 1 + word.length <= maxWidth) {
      curLine += ' ' + word;
    } else {
      const paddingSpaces = maxWidth - curLine.length;
      curLine += ' '.repeat(paddingSpaces);
      output.push(textJustify(curLine));
      curLine = word;
    }
  }
  output.push(paddingSpaces(curLine, maxWidth));
  return output;
  // Justify
}

function textJustify(text: string) {
  const words = text.split(/\s+/);
  const numWords = words.length;
  const totalSpaces = text.split('').filter((c) => c == ' ').length;

  if (numWords === 1) {
    return words[0] + ' '.repeat(totalSpaces);
  }

  const spaceBetween = Math.floor(totalSpaces / (numWords - 1));
  let spaceRemain = totalSpaces % (numWords - 1);

  let ans = words[0];
  for (let i = 1; i < words.length; i++) {
    if (spaceRemain > 0) {
      ans += ' ';
      spaceRemain--;
    }
    ans += ' '.repeat(spaceBetween) + words[i];
  }

  return ans;
}

function paddingSpaces(text: string, maxWidth: number) {
  const leftSpaces = maxWidth - text.length;
  return text + ' '.repeat(leftSpaces);
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
