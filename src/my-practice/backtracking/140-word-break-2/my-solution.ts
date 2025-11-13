class TrieNode {
  children: Map<string, TrieNode>;
  isEnd: boolean;
  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }
}

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }
  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.isEnd = true;
  }
}

export function wordBreak(s: string, wordDict: string[]): string[] {
  const trie = new Trie();
  for (const word of wordDict) {
    trie.insert(word);
  }

  const memo = new Map<number, string[]>();

  function backtrack(start: number): string[] {
    if (memo.has(start)) {
      return memo.get(start);
    }

    if (start === s.length) {
      return [''];
    }

    const results: string[] = [];
    let node = trie.root;

    for (let i = start; i < s.length; i++) {
      const char = s[i];
      if (!node.children.has(char)) {
        break;
      }
      node = node.children.get(char);
      if (node.isEnd) {
        const word = s.substring(start, i + 1);
        const suffixes = backtrack(i + 1);

        for (const suffix of suffixes) {
          if (suffix === '') {
            results.push(word);
          } else {
            results.push(word + ' ' + suffix);
          }
        }
      }
    }

    memo.set(start, results);
    return results;
  }

  return backtrack(0);
}

const s = 'catsanddog',
  wordDict = ['cat', 'cats', 'and', 'sand', 'dog'];
console.log(wordBreak(s, wordDict));
