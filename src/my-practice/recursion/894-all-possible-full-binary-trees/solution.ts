export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function allPossibleFBT(n: number): Array<TreeNode | null> {
  const memo = new Map<number, TreeNode[]>();

  function build(num: number): TreeNode[] {
    if (memo.has(num)) return memo.get(num);

    const res: TreeNode[] = [];

    if (num === 1) {
      res.push(new TreeNode(0));
    } else if (num % 2 === 1) {
      for (let left = 1; left < num; left += 2) {
        const right = num - 1 - left;
        for (const lTree of build(left)) {
          for (const rTree of build(right)) {
            const root = new TreeNode(0, lTree, rTree);
            res.push(root);
          }
        }
      }
    }
    memo.set(num, res);

    return res;
  }

  return build(n);
}
