import { MinPriorityQueue, PriorityQueue } from '@datastructures-js/priority-queue';

type FREQ = {
  word: string;
  f: number;
};
function topKFrequent(words: string[], k: number): string[] {
  const map = new Map<string, number>();
  for (const w of words) {
    map.set(w, (map.get(w) ?? 0) + 1);
  }

  const pq = new PriorityQueue<FREQ>((a, b) => a.f - b.f || b.word.localeCompare(a.word)); // minPQ
  for (const [w, f] of map.entries()) {
    pq.push({
      word: w,
      f,
    });
    if (pq.size() > k) {
      pq.pop();
    }
  }

  return pq
    .toArray()
    .reverse()
    .map((a) => a.word);
}

const words = ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'],
  k = 4;
console.log(topKFrequent(words, k));
