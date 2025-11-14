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
    function dfs(index: number, node: TrieNode, mismatch: number): boolean {
      if (mismatch > 1) return false;

      if (index === n) {
        return mismatch === 1 && node.isEnd;
      }

      const ch = searchWord[index];

      for (const [childChar, childNode] of node.children) {
        if (childChar === ch) {
          if (dfs(index + 1, childNode, mismatch)) return true;
        } else {
          if (dfs(index + 1, childNode, mismatch + 1)) return true;
        }
      }
      return false;
    }

    return dfs(0, this.trie.root, 0);
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
