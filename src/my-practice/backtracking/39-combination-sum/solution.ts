export function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const n = candidates.length;
  candidates.sort((a, b) => a - b);

  function backtrack(selectedCandidates: number[], sum: number, start: number) {
    if (sum === target) {
      res.push([...selectedCandidates]);
      return;
    }

    for (let i = start; i < n; i++) {
      const newSum = sum + candidates[i];
      if (newSum > target) break;
      selectedCandidates.push(candidates[i]);
      backtrack(selectedCandidates, newSum, i);
      selectedCandidates.pop();
    }
  }

  backtrack([], 0, 0);

  return res;
}

const candidates = [8, 7, 4, 3],
  target = 11;
console.log(combinationSum(candidates, target));
