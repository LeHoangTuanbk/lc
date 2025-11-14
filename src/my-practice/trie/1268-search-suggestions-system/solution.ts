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

  search(prefix: string): string[] {
    let node = this.root;
    for (const ch of prefix) {
      const idx = ch.charCodeAt(0) - 97;
      if (!node.children[idx]) return [];
      node = node.children[idx];
    }
    let res: string[] = [];
    function getAllWords(currentNode: TrieNode, currentWord: string) {
      if (res.length >= 3) return;
      if (currentNode.isEnd) {
        res.push(currentWord);
      }
      for (let i = 0; i < 26; i++) {
        if (!currentNode.children[i]) continue;
        getAllWords(currentNode.children[i], currentWord + String.fromCharCode(97 + i));
      }
    }
    getAllWords(node, prefix);
    return res;
  }
}

export function suggestedProducts(products: string[], searchWord: string): string[][] {
  const trie = new Trie();
  for (const product of products) {
    trie.insert(product);
  }

  const res: string[][] = [];
  for (let i = 1; i <= searchWord.length; i++) {
    const prefix = searchWord.slice(0, i);
    res.push(trie.search(prefix));
  }

  return res;
}
/* 
Example 1:

Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"].
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"].
After typing mou, mous and mouse the system suggests ["mouse","mousepad"].
Example 2:

Input: products = ["havana"], searchWord = "havana"
Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
Explanation: The only word "havana" will be always suggested while typing the search word.

*/
