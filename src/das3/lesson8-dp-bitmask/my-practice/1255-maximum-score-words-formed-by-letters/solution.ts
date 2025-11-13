export function maxScoreWords(words: string[], letters: string[], score: number[]): number {
  const n = words.length;
  const letterFreq = Array(26).fill(0);
  for (const ch of letters) letterFreq[ch.charCodeAt(0) - 97]++;

  const wordFreqs = words.map((w) => {
    const freq = Array(26).fill(0);
    for (const ch of w) freq[ch.charCodeAt(0) - 97]++;
    return freq;
  });

  const wordScores = words.map((_, i) =>
    wordFreqs[i].reduce((sum, f, idx) => sum + f * score[idx], 0),
  );

  let maxScore = 0,
    totalMasks = 1 << n;

  for (let mask = 0; mask < totalMasks; mask++) {
    const freq = Array(26).fill(0);
    let valid = true;
    let total = 0;

    for (let i = 0; i < n; i++) {
      if ((mask >> i) & 1) {
        for (let c = 0; c < 26; c++) {
          freq[c] += wordFreqs[i][c];
          if (freq[c] > letterFreq[c]) {
            valid = false;
            break;
          }
        }
        total += wordScores[i];
      }
      if (!valid) break;
    }

    if (valid) maxScore = Math.max(maxScore, total);
  }

  return maxScore;
}
