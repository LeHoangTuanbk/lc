export function alienOrder(words: string[]): string {
  const graphMap = new Map<number, number[]>();

  const graph = buildGraph(words);

  const visited: boolean[] = [];
  co;
}

function buildGraph(words: string[]): Map<string, Set<string>> | '' {
  const graph = new Map<string, Set<string>>();

  // Step 1: create node for each char
  for (const word of words) {
    for (const char of word) {
      if (!graph.has(char)) graph.set(char, new Set());
    }
  }

  // Step 2: compare adjacent words to get edges
  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i],
      w2 = words[i + 1];
    const minLen = Math.min(w1.length, w2.length);
    let found = false;

    for (let j = 0; j < minLen; j++) {
      if (w1[j] !== w2[j]) {
        graph.get(w1[j])!.add(w2[j]);
        found = true;
        break;
      }
    }

    if (!found && w1.length > w2.length) return '';
  }

  return graph;
}
