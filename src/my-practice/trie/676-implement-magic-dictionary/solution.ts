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
}

export class MagicDictionary {
  trie: Trie;
  constructor() {
    this.trie = new Trie();
  }

  buildDict(dictionary: string[]): void {
    for (const word of dictionary) {
      this.trie.insert(word);
    }
  }

  search(searchWord: string): boolean {
    const n = searchWord.length;
    for (let i = 0; i < n; i++) {
      const newS = searchWord.slice(0, i) + '.' + searchWord.slice(i + 1);
      if (this.searchWildCard(newS, i, searchWord)) return true;
    }
    return false;
  }

  searchWildCard(searchWord: string, wildIndex: number, original: string): boolean {
    const n = searchWord.length;
    function searchDFS(index: number, node: TrieNode) {
      if (index == n) {
        return node.isEnd;
      }

      const ch = searchWord[index];

      if (ch === '.') {
        for (const [childChar, child] of node.children) {
          if (childChar === original[wildIndex]) continue;
          if (searchDFS(index + 1, child)) {
            return true;
          }
        }
        return false;
      } else {
        if (node.children.has(ch)) {
          return searchDFS(index + 1, node.children.get(ch));
        } else {
          return false;
        }
      }
    }

    return searchDFS(0, this.trie.root);
  }
}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */

/* 
Example 1:

Input
["MagicDictionary", "buildDict", "search", "search", "search", "search"]
[[], [["hello", "leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]]
Output
[null, null, false, true, false, false]

Explanation
MagicDictionary magicDictionary = new MagicDictionary();
magicDictionary.buildDict(["hello", "leetcode"]);
magicDictionary.search("hello"); // return False
magicDictionary.search("hhllo"); // We can change the second 'h' to 'e' to match "hello" so we return True
magicDictionary.search("hell"); // return False
magicDictionary.search("leetcoded"); // return False

*/
