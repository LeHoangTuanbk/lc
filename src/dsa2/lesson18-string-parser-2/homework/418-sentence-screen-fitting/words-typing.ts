export function wordsTyping(rows: number, cols: number, sentence: string[]) {
  const n = sentence.length;
  let i = 0;
  let currentLine = 0;
  let count = 0;
  let currentSentence = '';
  let newLineFlag = true;
  while (currentLine < rows) {
    i = i % n;
    const word = sentence[i];
    if (currentSentence.length + Number(!newLineFlag) + word.length > cols) {
      currentLine++;
      newLineFlag = true;
      currentSentence = '';
    } else {
      if (newLineFlag) {
        currentSentence += word;
        newLineFlag = false;
      } else {
        currentSentence += ' ' + word;
      }
      if (i === n - 1) count++;
      i++;
    }
  }
  return count;
}

export function wordsTyping2(rows: number, cols: number, sentence: string[]) {
  const fullSentence = sentence.join(' ') + ' ';
  const totalLength = fullSentence.length;

  let pointer = 0;

  for (let row = 0; row < rows; row++) {
    pointer += cols;
    if (fullSentence[pointer % totalLength] === ' ') {
      pointer++;
    } else {
      while (pointer > 0 && fullSentence[(pointer - 1) % totalLength] !== ' ') {
        pointer--;
      }
    }
  }

  return Math.floor(pointer / totalLength);
}
/* 
Example 1:
	Input: rows = 4, cols = 5, sentence = ["I", "had", "apple", "pie"]
	Output: 1
	
	Explanation:
	I-had
	apple
	pie-I
	had--
	
	The character '-' signifies an empty space on the screen.
	
Example 2:
	Input:  rows = 2, cols = 8, sentence = ["hello", "world"]
	Output:  1
	
	Explanation:
	
	hello---
	world---
	
	The character '-' signifies an empty space on the screen.

Example 3:
	Input: rows = 3, cols = 6, sentence = ["a", "bcd", "e"]
	Output:  2
	
	Explanation:
	a-bcd-
	e-a---
	bcd-e-

	The character '-' signifies an empty space on the screen.

*/
