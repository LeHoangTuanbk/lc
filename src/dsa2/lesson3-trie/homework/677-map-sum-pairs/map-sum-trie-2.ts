class TrieNode {
  children: Array<TrieNode | null>;
  isEndOfWord: boolean;
  sum: number;
  constructor() {
    this.children = new Array(26).fill(null);
    this.isEndOfWord = false;
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
    const delta = val - (this.map.get(key) ?? 0);
    this.map.set(key, val);
    let node = this.root;
    for (const ch of key) {
      const idx = ch.charCodeAt(0) - 97;
      if (node.children[idx] === null) {
        node.children[idx] = new TrieNode();
      }
      node = node.children[idx];
      node.sum += delta;
    }
    return;
  }

  sum(prefix: string): number {
    let node = this.root;
    for (const ch of prefix) {
      const idx = ch.charCodeAt(0) - 97;
      if (node.children[idx] === null) return 0;
      node = node.children[idx];
    }
    return node.sum;
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
