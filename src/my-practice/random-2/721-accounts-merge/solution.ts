class UnionFind {
  private parent: Map<string, string>;
  constructor(elements: string[]) {
    this.parent = new Map();
    for (const el of elements) {
      this.parent.set(el, el);
    }
  }
  find(x: string): string {
    if (this.parent.get(x) !== x) {
      this.parent.set(x, this.find(this.parent.get(x)));
    }
    return this.parent.get(x);
  }

  union(x: string, y: string): void {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      this.parent.set(rootX, rootY);
    }
  }
}

export function accountsMerge(accounts: string[][]): string[][] {
  const emailToName = new Map<string, string>();
  const emails: string[] = [];

  for (const account of accounts) {
    const name = account[0];
    for (let i = 1; i < account.length; i++) {
      const email = account[i];
      emailToName.set(email, name);
      emails.push(email);
    }
  }

  const uf = new UnionFind(emails);

  for (const account of accounts) {
    const firstEmail = account[1];
    for (let i = 2; i < account.length; i++) {
      uf.union(firstEmail, account[i]);
    }
  }

  const rootToEmails = new Map<string, string[]>();

  for (const email of emailToName.keys()) {
    const root = uf.find(email);
    if (!rootToEmails.has(root)) {
      rootToEmails.set(root, []);
    }
    rootToEmails.get(root).push(email);
  }

  const result: string[][] = [];
  for (const [root, group] of rootToEmails) {
    group.sort();
    result.push([emailToName.get(root), ...group]);
  }

  return result;
}

const accounts = [
  ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
  ['John', 'johnsmith@mail.com', 'john00@mail.com'],
  ['Mary', 'mary@mail.com'],
  ['John', 'johnnybravo@mail.com'],
];

console.log(accountsMerge(accounts));
