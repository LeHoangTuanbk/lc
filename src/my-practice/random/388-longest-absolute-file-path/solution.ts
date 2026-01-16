type FSNode = {
  name: string;
  isFile: boolean;
  children: FSNode[];
};

function buildTree(input: string): FSNode {
  const root: FSNode = { name: '', isFile: false, children: [] };
  const stack: FSNode[] = [root];

  const lines = input.split('\n');

  for (const line of lines) {
    const depth = line.lastIndexOf('\t') + 1;
    const name = line.slice(depth);
    const isFile = name.includes('.');

    const node: FSNode = {
      name,
      isFile,
      children: [],
    };

    stack[depth + 1] = node;
    stack[depth].children.push(node);
  }

  return root;
}

function calculateLongestPath(root: FSNode): number {
  let maxLen = 0;

  function dfs(node: FSNode, curLen: number) {
    if (node.isFile) {
      maxLen = Math.max(maxLen, curLen);
      return;
    }
    for (const child of node.children) {
      const nextLen = curLen === 0 ? child.name.length : curLen + 1 + child.name.length;
      dfs(child, nextLen);
    }
  }

  dfs(root, 0);
  return maxLen;
}

export function lengthLongestPath(input: string): number {
  if (!input) return 0;
  const tree = buildTree(input);
  return calculateLongestPath(tree);
}

/* 
Input: input = "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"
Output: 20
Explanation: We have only one file, and the absolute path is "dir/subdir2/file.ext" of length 20.
*/
