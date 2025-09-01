export function arrangeWords2(text: string): string {
  const words = text.split(' ');
  const n = words.length;
  const wordIndex = new Map<string, number>();
  for (let i = 0; i < n; i++) {
    wordIndex.set(words[i], i);
  }
  words.sort((a, b) => {
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;
    if (a.length === b.length) return wordIndex[a] < wordIndex[b] ? -1 : 1;
  });

  let res = words.join(' ').toLowerCase();
  res = res[0].toUpperCase() + res.slice(1, res.length);
  return res;
}

export function arrangeWords(text: string): string {
  const words = text.split(' ');
  words.sort((a, b) => a.length - b.length);
  let res = words.join(' ').toLowerCase();
  res = res[0].toUpperCase() + res.slice(1, res.length);
  return res;
}

const text = 'Leetcode is cool';
console.log(arrangeWords(text));

const text2 = 'Keep calm and code on';
console.log(arrangeWords(text2));
/* 
Example 1:

Input: text = "Leetcode is cool"
Output: "Is cool leetcode"
Explanation: There are 3 words, "Leetcode" of length 8, "is" of length 2 and "cool" of length 4.
Output is ordered by length and the new first word starts with capital letter.
Example 2:

Input: text = "Keep calm and code on"
Output: "On and keep calm code"
Explanation: Output is ordered as follows:
"On" 2 letters.
"and" 3 letters.
"keep" 4 letters in case of tie order by position in original text.
"calm" 4 letters.
"code" 4 letters.
Example 3:

Input: text = "To be or not to be"
Output: "To be or to be not"

*/
