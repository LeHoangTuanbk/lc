function maxProduct(words: string[]): number {
  const n = words.length;
  const wordsBits = Array(n).fill(0);
  const aCharCode = 'a'.charCodeAt(0);
  for (let i = 0; i < n; i++) {
    const word = words[i];
    for (const c of word) {
      wordsBits[i] |= 1 << (c.charCodeAt(0) - aCharCode);
    }
  }

  let maxLength = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((wordsBits[i] & wordsBits[j]) === 0) {
        maxLength = Math.max(words[i].length * words[j].length, maxLength);
      }
    }
  }

  return maxLength;
}

const words = ['eae', 'ea', 'aaf', 'bda', 'fcf', 'dc', 'ac', 'ce', 'cefde', 'dabae'];
console.log(maxProduct(words));
