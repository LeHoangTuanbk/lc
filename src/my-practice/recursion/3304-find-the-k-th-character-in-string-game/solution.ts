function nextCharacter(s: string) {
  if (s === 'z') return 'a';
  return String.fromCharCode(s.charCodeAt(0) + 1);
}

function generateNewString(s: string): string {
  return s.split('').map(nextCharacter).join('');
}

export function kthCharacter(k: number): string {
  let word = 'a';
  const times = Math.ceil(Math.log2(k));
  for (let i = 0; i < times; i++) {
    const newWord = generateNewString(word);
    word = word.concat(newWord);
  }
  return word[k - 1];
}

console.log(kthCharacter(5));
/* 
Example 1:

Input: k = 5

Output: "b"5

Explanation:

Initially, word = "a". We need to do the operation three times:

Generated string is "b", word becomes "ab".
Generated string is "bc", word becomes "abbc".
Generated string is "bccd", word becomes "abbcbccd".

*/
