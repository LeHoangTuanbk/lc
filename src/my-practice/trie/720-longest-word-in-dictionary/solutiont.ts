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
}

export function longestWord(words: string[]): string {
  const trie = new Trie();
  for (const word of words) {
    trie.insert(word);
  }
  const canBuiltWords: string[] = [];
  function dfs(node: TrieNode, currentWord: string) {
    if (node.isEnd) {
      canBuiltWords.push(currentWord);
    } else return;
    for (let i = 0; i < 26; i++) {
      const currentNode = node.children[i];
      if (currentNode && currentNode.isEnd) {
        dfs(node.children[i], currentWord + String.fromCharCode(97 + i));
      }
    }
    return;
  }
  const root = trie.root;
  for (let i = 0; i < 26; i++) {
    if (root.children[i]) {
      dfs(root.children[i], String.fromCharCode(97 + i));
    }
  }

  return (
    canBuiltWords.sort((a, b) => {
      if (a.length !== b.length) {
        return b.length - a.length;
      } else {
        return a.localeCompare(b);
      }
    })[0] ?? ''
  );
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
