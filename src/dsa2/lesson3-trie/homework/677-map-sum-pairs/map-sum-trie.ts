class TrieNode {
  children: Array<TrieNode | null>;
  isEndOfWord: boolean;
  constructor() {
    this.children = new Array(26).fill(null);
    this.isEndOfWord = false;
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
    this.map.set(key, val);
    let node = this.root;
    for (const ch of key) {
      const index = ch.charCodeAt(0) - 97;
      if (node.children[index] === null) {
        node.children[index] = new TrieNode();
      }
      node = node.children[index];
    }
    node.isEndOfWord = true;
    return;
  }

  stringStartsWith(prefix: string): string[] {
    let node = this.root;
    for (const ch of prefix) {
      const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
      if (node.children[index] === null) return [];
      node = node.children[index];
    }
    const allStringWithPrefix: string[] = [];
    if (node.isEndOfWord) {
      allStringWithPrefix.push(prefix);
    }
    return this.findAllStringHelper(node, prefix, allStringWithPrefix);
  }

  sum(prefix: string): number {
    let sum = 0;
    const stringStartsWithPrefix = this.stringStartsWith(prefix);
    for (const s of stringStartsWithPrefix) {
      sum += this.map.get(s);
    }
    return sum;
  }

  findAllStringHelper(node: TrieNode, s: string, allStringWithPrefix: string[]) {
    if (!node) return;
    for (let i = 0; i < 26; i++) {
      if (node.children[i] === null) continue;
      if (node.children[i].isEndOfWord) {
        allStringWithPrefix.push(s + String.fromCharCode(97 + i));
      }
      this.findAllStringHelper(
        node.children[i],
        s + String.fromCharCode(97 + i),
        allStringWithPrefix,
      );
    }
    return allStringWithPrefix;
  }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

const mapSum = new MapSum();
mapSum.insert('apple', 3);
console.log(mapSum.sum('ap')); // return 3 (apple = 3)
mapSum.insert('app', 2);
console.log(mapSum.sum('ap')); // return 5 (apple + app = 3 + 2 = 5)
