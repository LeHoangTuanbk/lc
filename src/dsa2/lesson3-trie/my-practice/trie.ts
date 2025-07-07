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
    const deleteHelper = (node: TrieNode, depth: number): [boolean, boolean] => {
      if (depth === word.length) {
        if (!node.isEndOfWord) return [false, false];
        node.isEndOfWord = false;
        const canDeleteNode = node.children.every((child) => child === null);
        return [true, canDeleteNode];
      }

      const index = word.charCodeAt(depth) - 'a'.charCodeAt(0);
      const child = node.children[index];
      if (!child) return [false, false];

      const [deletedWord, shouldDeleteChild] = deleteHelper(child, depth + 1);

      if (shouldDeleteChild) {
        node.children[index] = null;
        const canDeleteNode = !node.isEndOfWord && node.children.every((c) => c === null);
        return [deletedWord, canDeleteNode];
      }

      return [deletedWord, false];
    };

    const [deletedWord] = deleteHelper(this.root, 0);
    return deletedWord;
  }
}

class TrieNode {
  children: Array<TrieNode | null>;
  sum: number;
  constructor() {
    this.children = new Array(26).fill(null);
    this.sum = 0;
  }
}

export class MapSum {
  private map: Map<string, number>;
  private root: TrieNode;

  constructor() {
    this.map = new Map<string, number>();
    this.root = new TrieNode();
  }

  insert(key: string, val: number): void {
    const delta = val - (this.map.get(key) ?? 0); // difference if key already exists
    this.map.set(key, val);

    let node = this.root;
    for (const ch of key) {
      const index = ch.charCodeAt(0) - 97;
      if (node.children[index] === null) {
        node.children[index] = new TrieNode();
      }
      node = node.children[index];
      node.sum += delta;
    }
  }

  sum(prefix: string): number {
    let node = this.root;
    for (const ch of prefix) {
      const index = ch.charCodeAt(0) - 97;
      if (node.children[index] === null) return 0;
      node = node.children[index];
    }
    return node.sum;
  }
}
