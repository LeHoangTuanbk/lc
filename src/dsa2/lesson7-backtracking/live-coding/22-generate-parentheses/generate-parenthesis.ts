export function generateParenthesis2(n: number): string[] {
  const result: string[] = [];
  const parenthesis = '()';

  function backtrack(start: number, s: string[]) {
    if (s.length === n * 2) {
      if (isWellFormParenthesis(s)) {
        result.push(s.join(''));
      }
      return;
    }
    for (const c of parenthesis) {
      s.push(c);
      if (canGoNext(s)) {
        backtrack(start + 1, s);
      }
      s.pop();
    }
  }

  backtrack(0, []);
  return result;
}

function isWellFormParenthesis(s: string[]): boolean {
  const stack: string[] = [];
  for (const c of s) {
    if (c === '(') {
      stack.push(c);
    } else {
      if (stack.at(-1) != '(') {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

function canGoNext(s: string[]): boolean {
  const open = s.filter((c) => c === '(').length;
  const close = s.filter((c) => c === ')').length;
  return open >= close;
}

export function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  function backtrack(s: string[], open: number, close: number) {
    if (s.length === 2 * n) {
      result.push(s.join(''));
      return;
    }

    if (open < n) {
      s.push('(');
      backtrack(s, open + 1, close);
      s.pop();
    }

    if (close < open) {
      s.push(')');
      backtrack(s, open, close + 1);
      s.pop();
    }
  }

  backtrack([], 0, 0);

  return result;
}

const n = 3;
console.log(generateParenthesis(n));

// console.log(isWellFormParenthesis(['(', '(', '(', ')', ')', ')']));

export function generateParenthesis3(n: number): string[] {
  const res: string[] = [];
  const sb: string[] = [];

  function dfs(idx: number, total: number, openCount: number): void {
    if (idx === total) {
      if (openCount === 0) {
        res.push(sb.join(''));
      }
      return;
    }

    // Add '(' if we won't exceed total
    if (openCount < total - idx) {
      sb.push('(');
      dfs(idx + 1, total, openCount + 1);
      sb.pop();
    }

    // Add ')' if there's unmatched '(' to close
    if (openCount > 0) {
      sb.push(')');
      dfs(idx + 1, total, openCount - 1);
      sb.pop();
    }
  }

  dfs(0, 2 * n, 0);
  return res;
}

export function generateParenthesis4(n: number): string[] {
  const res: string[] = [];

  function dfs(str: string, n: number, m: number): void {
    if (n === 0 && m === 0) {
      res.push(str);
      return;
    }
    if (n > 0) dfs(str + '(', n - 1, m + 1);
    if (m > 0) dfs(str + ')', n, m - 1);
  }

  dfs('', n, 0); // n: open, m: close
  return res;
}
