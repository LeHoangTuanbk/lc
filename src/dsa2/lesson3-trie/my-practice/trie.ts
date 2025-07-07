class TrieNode {
  children: Array<TrieNode | null>;
  isEndOfWord: boolean;
  constructor() {
    this.children = new Array(26).fill(null);
    this.isEndOfWord = false;
  }
}

export class Trie {
  private root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (const ch of word) {
      const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
      if (node.children[index] === null) {
        node.children[index] = new TrieNode();
      }
      node = node.children[index];
    }
    node.isEndOfWord = true;
    return;
  }
  search(word: string): boolean {
    let node = this.root;
    for (const ch of word) {
      const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
      if (node.children[index] === null) return false;
      node = node.children[index];
    }
    return node.isEndOfWord;
  }
  startsWith(prefix: string): boolean {
    let node = this.root;
    for (const ch of prefix) {
      const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
      if (node.children[index] === null) return false;
      node = node.children[index];
    }
    return true;
  }
  delete(word: string): boolean {
    const remove = (node: TrieNode | null, depth: number): TrieNode | null => {
      if (!node) return null;

      if (depth === word.length) {
        if (!node.isEndOfWord) return node; // word not found
        node.isEndOfWord = false;

        if (node.children.every((c) => c === null)) {
          return null; // delete this node
        }
        return node;
      }

      const idx = word.charCodeAt(depth) - 97;
      node.children[idx] = remove(node.children[idx], depth + 1);

      if (node.children.every((c) => c === null) && !node.isEndOfWord) {
        return null; // delete current node
      }

      return node;
    };

    const before = this.search(word);
    this.root = remove(this.root, 0) || new TrieNode();
    return before;
  }
}
