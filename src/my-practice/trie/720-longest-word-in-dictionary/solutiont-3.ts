class TrieNode {
  children: TrieNode[];
  isEnd: boolean;

  constructor() {
    this.children = Array<TrieNode>(26);
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
    for (const ch of word) {
      const idx = ch.charCodeAt(0) - 97;
      if (!node.children[idx]) {
        node.children[idx] = new TrieNode();
      }
      node = node.children[idx];
    }
    node.isEnd = true;
  }

  canBuild(word: string): boolean {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const idx = word.charCodeAt(i) - 97;
      if (!node.children[idx] || !node.children[idx].isEnd) {
        return false;
      }
      node = node.children[idx];
    }
    return true;
  }
}

export function longestWord(words: string[]): string {
  const trie = new Trie();
  for (const word of words) {
    trie.insert(word);
  }
  let longest = '';
  for (const word of words) {
    if (trie.canBuild(word)) {
      if (word.length > longest.length || (word.length === longest.length && word < longest)) {
        longest = word;
      }
    }
  }
  return longest;
}

const words = [
  'yo',
  'ew',
  'fc',
  'zrc',
  'yodn',
  'fcm',
  'qm',
  'qmo',
  'fcmz',
  'z',
  'ewq',
  'yod',
  'ewqz',
  'y',
];
console.log(longestWord(words));
