class TrieNode {
  children = new Map<string, TrieNode>();
  isEnd = false;
}

class Trie {
  root: TrieNode = new TrieNode();

  insert(word: string) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children.has(ch)) {
        node.children.set(ch, new TrieNode());
      }
      node = node.children.get(ch)!;
    }
    node.isEnd = true;
  }
}

export function findAllConcatenatedWordsInADict(words: string[]): string[] {
  words.sort((a, b) => a.length - b.length);
  const trie = new Trie();
  const res: string[] = [];

  for (const word of words) {
    if (canForm(word, trie)) {
      res.push(word);
    }
    trie.insert(word);
  }
  return res;
}

function canForm(word: string, trie: Trie): boolean {
  const n = word.length;

  function dfs(index: number, count: number): boolean {
    if (index === n) {
      return count >= 2;
    }

    let node = trie.root;

    for (let i = index; i < n; i++) {
      const ch = word[i];
      if (!node.children.has(ch)) return false;
      node = node.children.get(ch);
      if (node.isEnd) {
        if (dfs(i + 1, count + 1)) return true;
      }
    }
    return false;
  }
  return dfs(0, 0);
}
