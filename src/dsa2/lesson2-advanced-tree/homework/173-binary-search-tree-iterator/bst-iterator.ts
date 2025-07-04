import { TreeNode } from '../../tree-node';
class BSTIterator {
  private idx: number = -1;
  private bstValues: number[] = [];
  constructor(root: TreeNode | null) {
    this.inOrder(root);
  }

  next(): number {
    if (this.hasNext()) return this.bstValues[++this.idx];
  }

  hasNext(): boolean {
    return this.idx < this.bstValues.length - 1;
  }

  inOrder(node: TreeNode | null) {
    if (node === null) return;
    this.inOrder(node.left);
    this.bstValues.push(node.val);
    this.inOrder(node.right);
  }
}

class BSTIterator2 {
  private stack: TreeNode[] = [];

  constructor(root: TreeNode | null) {
    this.pushLeft(root);
  }

  next(): number {
    const nextNode = this.stack.pop();
    if (nextNode.right) {
      this.pushLeft(nextNode.right);
    }
    return nextNode.val;
  }

  hasNext(): boolean {
    return !!this.stack.length;
  }

  private pushLeft(node: TreeNode | null) {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }
}
