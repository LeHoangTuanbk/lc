export function getPermutation(n: number, k: number): string {
  let result = '';
  let count = 0;
  const usedDigits = new Array(n + 1).fill(false);

  function backtrack(permutation: string) {
    if (permutation.length === n) {
      count++;
      if (count === k) {
        result = permutation;
        return true;
      } else {
        return false;
      }
    }

    for (let i = 1; i <= n; i++) {
      if (usedDigits[i]) continue;
      usedDigits[i] = true;
      if (backtrack(permutation + i)) {
        return true;
      }
      usedDigits[i] = false;
    }
  }

  backtrack('');
  return result;
}
