export function topKFrequent(words: string[], k: number): string[] {
  const map = new Map<string, number>();

  for (const w of words) {
    map.set(w, (map.get(w) ?? 0) + 1);
  }

  const buckets: string[][] = Array.from({ length: words.length + 1 }, () => []);

  for (const [word, freq] of map.entries()) {
    buckets[freq].push(word);
  }

  const result: string[] = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i].length > 0) {
      buckets[i].sort();
      for (const word of buckets[i]) {
        result.push(word);
        if (result.length === k) break;
      }
    }
  }

  return result;
}

const words = ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'],
  k = 4;
console.log(topKFrequent(words, k));
