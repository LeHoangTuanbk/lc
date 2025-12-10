export function kthSmallestPath(destination: number[], k: number): string {
  const [row, col] = destination;
  let V = row,
    H = col;

  const n = H + V;

  const C: number[][] = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    C[i][0] = C[i][i] = 1;
    for (let j = 1; j < i; j++) {
      C[i][j] = C[i - 1][j - 1] + C[i - 1][j];
    }
  }

  let result = '';

  for (let i = 0; i < n; i++) {
    if (H > 0) {
      const countIfH = C[H - 1 + V][V];

      if (k <= countIfH) {
        result += 'H';
        H--;
      } else {
        result += 'V';
        k -= countIfH;
        V--;
      }
    } else {
      result += 'V';
      V--;
    }
  }

  return result;
}

const destination = [2, 3],
  k = 3;
console.log(kthSmallestPath(destination, k));
