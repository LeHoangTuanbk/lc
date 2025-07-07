class TrieNode {
  children: TrieNode[];
  isEndOfNode: boolean;
  constructor() {
    this.children = Array<TrieNode>(26).fill(null);
    this.isEndOfNode = false;
  }
}

class Trie {
  private root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (const w of word) {
      const idx = w.charCodeAt(0) - 'a'.charCodeAt(0);
      if (node.children[idx] === null) {
        node.children[idx] = new TrieNode();
      }
      node = node.children[idx];
    }
    node.isEndOfNode = true;
    return;
  }

  search(word: string): boolean {
    let node = this.root;
    for (const w of word) {
      const idx = w.charCodeAt(0) - 97;
      if (node.children[idx] === null) {
        return false;
      }
      node = node.children[idx];
    }
    return node.isEndOfNode;
  }

  startsWith(prefix: string): boolean {
    let node = this.root;
    for (const w of prefix) {
      const idx = w.charCodeAt(0) - 97;
      if (node.children[idx] === null) {
        return false;
      }
      node = node.children[idx];
    }
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

class WordDictionary {
  private root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
    let node = this.root;
    for (const w of word) {
      const idx = w.charCodeAt(0) - 'a'.charCodeAt(0);
      if (node.children[idx] === null) {
        node.children[idx] = new TrieNode();
      }
      node = node.children[idx];
    }
    node.isEndOfNode = true;
    return;
  }

  search(word: string): boolean {
    function searchHelper(node: TrieNode, currentIndex: number) {
      if (currentIndex === word.length) {
        return true;
      }
      if (word[currentIndex] === '.') {
        for (const child of node.children) {
          if (searchHelper(child, currentIndex + 1)) {
            return true;
          }
        }
      }

      const sliceWord = word.slice(currentIndex);

      for (const w of sliceWord) {
        const idx = w.charCodeAt(0) - 97;
        if (node.children[idx] === null) {
          return false;
        }
        node = node.children[idx];
      }

      return node.isEndOfNode;
    }

    return searchHelper(this.root, 0);
  }
}

/* 
Example:

Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True

*/
