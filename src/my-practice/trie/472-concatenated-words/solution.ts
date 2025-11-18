export function findAllConcatenatedWordsInADict(words: string[]): string[] {
  words.sort((a, b) => a.length - b.length);

  const dict = new Set<string>();
  const res: string[] = [];
  for (const word of words) {
    if (canForm(word, dict)) {
      res.push(word);
    }
    dict.add(word);
  }
  return res;
}

function canForm(word: string, dict: Set<string>): boolean {
  if (dict.size === 0) return false;

  const n = word.length;
  const dp = Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] == true) {
        const sub = word.slice(j, i);
        if (dict.has(sub)) {
          dp[i] = true;
          break;
        }
      }
    }
  }

  return dp[n];
}
