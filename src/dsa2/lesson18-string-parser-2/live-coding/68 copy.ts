export function fullJustify(words: string[], maxWidth: number): string[] {
  const output: string[] = [];
  let lineWords: string[] = [];
  let lineLen = 0;

  for (const word of words) {
    // + lineWords.length là số khoảng trắng giữa các từ
    if (lineLen + word.length + lineWords.length > maxWidth) {
      output.push(textJustify(lineWords, maxWidth));
      lineWords = [];
      lineLen = 0;
    }

    lineWords.push(word);
    lineLen += word.length;
  }

  // Dòng cuối cùng → left-justified
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

  let result = words[0];
  for (let i = 1; i < words.length; i++) {
    const extra = spaceRemain-- > 0 ? 1 : 0;
    result += ' '.repeat(spaceBetween + extra) + words[i];
  }

  return result;
}

function leftJustify(words: string[], maxWidth: number): string {
  const text = words.join(' ');
  return text + ' '.repeat(maxWidth - text.length);
}
