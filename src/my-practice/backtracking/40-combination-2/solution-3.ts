export function combinationSum2(candidates: number[], target: number): number[][] {
  candidates = candidates.sort((a, b) => a - b);
  let res: number[][] = [];
  const n = candidates.length;
  function backtrack(selectedCandidates: number[], start: number, sum: number) {
    if (sum === target) {
      res.push([...selectedCandidates]);
      return;
    }

    for (let i = start; i < n; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      const newSum = sum + candidates[i];
      if (newSum > target) break;
      selectedCandidates.push(candidates[i]);
      backtrack(selectedCandidates, i + 1, newSum);
      selectedCandidates.pop();
    }
  }
  backtrack([], 0, 0);
  return res;
}

const candidates = [2, 5, 2, 1, 2],
  target = 5;
console.log(combinationSum2(candidates, target));
