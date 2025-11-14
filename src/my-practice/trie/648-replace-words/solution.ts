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
    for (const ch of word) {
      if (!node.children.has(ch)) {
        node.children.set(ch, new TrieNode());
      }
      node = node.children.get(ch);
    }
    node.isEnd = true;
  }

  findPrefix(word: string): string {
    let node = this.root;
    let prefix = '';

    for (const ch of word) {
      if (!node.children.get(ch)) break;
      node = node.children.get(ch);
      prefix += ch;
      if (node.isEnd) return prefix;
    }

    return word;
  }
}

export function replaceWords(dictionary: string[], sentence: string): string {
  const trie = new Trie();
  for (const word of dictionary) {
    trie.insert(word);
  }
  return sentence
    .split(' ')
    .map((word) => trie.findPrefix(word))
    .join(' ');
}

const dictionary = ['cat', 'bat', 'rat'],
  sentence = 'the cattle was rattled by the battery';
console.log(replaceWords(dictionary, sentence));

/* 
Example 1:

Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"
Example 2:

Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
Output: "a a b c"

*/
