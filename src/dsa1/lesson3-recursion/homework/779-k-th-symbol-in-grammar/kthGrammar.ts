export function kthGrammar2(n: number, k: number): number {
  const table: string[] = new Array(n).fill('');
  table[0] = '0';
  table[1] = '01';
  for (let i = 2; i < n; i++) {
    let tempArray: string[] = [];
    for (let j = 0; j < table[i - 1].length; j++) {
      if (table[i - 1][j] == '0') tempArray.push('01');
      else tempArray.push('10');
    }
    table[i] = tempArray.join('');
  }
  return parseInt(table[n - 1][k - 1]);
}

// Time : O(n)
export function kthGrammar(n: number, k: number): number {
  if (n == 1) return 0;
  const length = Math.pow(2, n - 1);
  const mid = length / 2;
  if (k <= mid) return kthGrammar(n - 1, k);
  return 1 - kthGrammar(n - 1, k - mid);
}
