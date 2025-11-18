export function longestWord(words: string[]): string {
  words.sort((a, b) => a.length - b.length || a.localeCompare(b));
  console.log(words);
  let built = new Set<string>();

  let res = '';
  for (let word of words) {
    if (word.length === 1 || built.has(word.slice(0, -1))) {
      built.add(word);
      if (word.length > res.length) {
        res = word;
      }
    }
  }
  return res;
}
const words = ['a', 'banana', 'app', 'b', 'appl', 'ap', 'apply', 'apple'];
console.log(longestWord(words));
