function isBalanced(num: number): boolean {
  const s = num.toString();
  const freq = new Map<number, number>();
  for (const c of s) {
    const d = Number(c);
    freq.set(d, (freq.get(d) ?? 0) + 1);
  }
  for (const [d, count] of freq.entries()) {
    if (d !== count) return false;
  }
  return true;
}

function generateBalancedNumbers(): number[] {
  const res: number[] = [];
  // Limit digits to [1..6]
  const digits = [1, 2, 3, 4, 5, 6];

  function backtrack(current: string[], idx: number) {
    if (idx === digits.length) {
      if (current.length > 0) {
        const num = Number(current.join(''));
        if (isBalanced(num)) res.push(num);
      }
      return;
    }
    // Option 1: skip this digit
    backtrack(current, idx + 1);
    // Option 2: include digit d exactly d times
    const d = digits[idx];
    const newPart = Array(d).fill(String(d));
    backtrack([...current, ...newPart], idx + 1);
  }

  backtrack([], 0);
  return res.sort((a, b) => a - b);
}

const balancedNumbers = generateBalancedNumbers();

export function nextBeautifulNumber(n: number): number {
  for (const num of balancedNumbers) {
    if (num > n) return num;
  }
  return -1; // theoretically unreachable
}
