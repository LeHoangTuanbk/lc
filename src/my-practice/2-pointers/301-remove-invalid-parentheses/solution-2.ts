function isValid(s: string): boolean {
  let count = 0;
  for (const ch of s) {
    if (ch === '(') count++;
    else if (ch === ')') {
      count--;
      if (count < 0) return false; // có ')' dư
    }
  }
  return count === 0;
}

export function removeInvalidParenthesesBFS(s: string): string[] {
  if (!s) return [''];

  const res: string[] = [];
  const visited = new Set<string>();
  const queue: string[] = [s];
  visited.add(s);

  let found = false;

  while (queue.length > 0) {
    const cur = queue.shift()!;

    if (isValid(cur)) {
      res.push(cur);
      found = true;
    }

    if (found) continue; // ⚡ Khi đã tìm thấy valid ở level này, không sinh level sâu hơn

    for (let i = 0; i < cur.length; i++) {
      if (cur[i] !== '(' && cur[i] !== ')') continue; // chỉ xoá ngoặc

      const next = cur.slice(0, i) + cur.slice(i + 1);
      if (!visited.has(next)) {
        visited.add(next);
        queue.push(next);
      }
    }
  }

  return res;
}

// ✅ Test
console.log(removeInvalidParenthesesBFS("()())()"));
// → ["()()()", "(())()"]