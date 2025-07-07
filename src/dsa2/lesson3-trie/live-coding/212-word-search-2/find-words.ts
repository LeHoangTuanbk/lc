export class TrieNode {
  children: Map<string, TrieNode> = new Map();
  word: string | null = null;
}

function buildTrie(words: string[]): TrieNode {
  const root = new TrieNode();
  for (const word of words) {
    let node = root;
    for (const ch of word) {
      if (!node.children.has(ch)) {
        node.children.set(ch, new TrieNode());
      }
      node = node.children.get(ch);
    }
    node.word = word;
  }
  return root;
}

function findWords(board: string[][], words: string[]): string[] {
  const root = buildTrie(words);
  const res: string[] = [];
  const rows = board.length,
    cols = board[0].length;

  function dfs(r: number, c: number, node: TrieNode) {
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      board[r][c] === '#' ||
      !node.children.has(board[r][c])
    )
      return;

    const ch = board[r][c];
    const nextNode = node.children.get(ch);

    if (nextNode.word !== null) {
      res.push(nextNode.word);
      nextNode.word = null;
    }

    board[r][c] = '#';
    dfs(r + 1, c, nextNode);
    dfs(r - 1, c, nextNode);
    dfs(r, c + 1, nextNode);
    dfs(r, c - 1, nextNode);
    board[r][c] = ch;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dfs(r, c, root);
    }
  }

  return res;
}
/* 
Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]

Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []

*/
