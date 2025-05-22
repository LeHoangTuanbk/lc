export class TreeNode {
  value: number;
  children: TreeNode[];
  parent: TreeNode | null;
  constructor(value: number) {
    this.value = value;
    this.children = [];
    this.parent = null;
  }

  addChild(value: number) {
    const newNode = new TreeNode(value);
    newNode.parent = this;
    this.children.push(newNode);
    return newNode;
  }

  search(value: number): TreeNode | null {
    if (this.value === value) return this;
    for (const child of this.children) {
      const foundNode = child.search(value);
      if (foundNode) return foundNode;
    }
    return null;
  }
}

class Tree {
  root: TreeNode;
  constructor(rootValue: number) {
    this.root = new TreeNode(rootValue);
  }

  insert(value: number, parentValue?: number) {
    if (!parentValue) {
      return this.root.addChild(value);
    }

    const parentNode = this.search(parentValue);
    if (!parentNode) {
      throw new Error(`Parent value doesn't exist!`);
    }
    return parentNode.addChild(value);
  }

  search(value: number) {
    return this.root.search(value);
  }

  dfs() {
    const traverse = (node: TreeNode) => {
      process.stdout.write(`${node.value} `);
      for (const child of node.children) {
        traverse(child);
      }
    };

    traverse(this.root);
  }

  bfs() {
    if (!this.root) return;
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift()!;
      process.stdout.write(`${node.value} `);
      queue.push(...node.children);
    }
  }

  levelOrderTraversal() {
    if (!this.root) return;
    const queue = [this.root];
    let level = 0;
    while (queue.length) {
      const levelSize = queue.length;
      console.log(`Level: ${level}`);
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift()!;
        console.log(node.value);
        queue.push(...node.children);
      }
      level++;
    }
  }

  print() {
    const printNode = (node: TreeNode, level: number) => {
      // process.stdout.write(' '.repeat(level) + node.value);
      console.log('  '.repeat(level) + node.value);
      for (const child of node.children) {
        printNode(child, level + 1);
      }
    };

    printNode(this.root, 0);
  }
}

const tree = new Tree(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);

tree.insert(5, 2);
tree.insert(6, 2);
// console.log('BFS');
// tree.bfs();
// console.log();
// console.log('DFS');
// tree.dfs();
// console.log();

// tree.print();
tree.levelOrderTraversal();
console.log();
