export function maxScoreWords(words: string[], letters: string[], score: number[]): number {
  const n = words.length;
  const lettersFreq = Array(26).fill(0);
  for (const ch of letters) lettersFreq[ch.charCodeAt(0) - 97]++;

  const wordFreq = words.map((w) => {
    const freq = Array(26).fill(0);
    for (const ch of w) freq[ch.charCodeAt(0) - 97]++;
    return freq;
  });

  const wordScores = words.map((_, i) =>
    wordFreq[i].reduce((sum, f, idx) => sum + f * score[idx], 0),
  );

  let maxScore = 0;

  function backtrack(i: number, currentScore: number) {
    if (i === n) {
      maxScore = Math.max(maxScore, currentScore);
      return;
    }

    // Case 1: skip word
    backtrack(i + 1, currentScore);

    // Case 2: take this word
    let ok = true;
    for (let c = 0; c < 26; c++) {
      if (wordFreq[i][c] > lettersFreq[c]) {
        ok = false;
        break;
      }
    }

    if (ok) {
      for (let c = 0; c < 26; c++) lettersFreq[c] -= wordFreq[i][c];
      backtrack(i + 1, currentScore + wordScores[i]);
      for (let c = 0; c < 26; c++) lettersFreq[c] += wordFreq[i][c];
    }
  }

  backtrack(0, 0);

  return maxScore;
}
