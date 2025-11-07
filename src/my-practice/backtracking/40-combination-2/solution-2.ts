export function combinationSum2(candidates: number[], target: number): number[][] {
  candidates = candidates.sort((a, b) => a - b);
  let res: number[][] = [];
  const n = candidates.length;
  const visited = Array(n).fill(false);
  const set = new Set<string>();
  function backtrack(selectedCandidates: number[], start: number, sum: number) {
    if (sum > target) return;
    if (sum === target) {
      const key = selectedCandidates.join(',');
      if (!set.has(key)) {
        res.push([...selectedCandidates]);
        set.add(key);
      }
      return;
    }
    for (let i = start; i < n; i++) {
      if (visited[i]) continue;
      if (candidates[i] > target) continue;
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      visited[i] = true;
      sum += candidates[i];
      selectedCandidates.push(candidates[i]);
      backtrack(selectedCandidates, i + 1, sum);
      selectedCandidates.pop();
      sum -= candidates[i];
      visited[i] = false;
    }
  }
  backtrack([], 0, 0);
  return res;
}

const candidates = [2, 5, 2, 1, 2],
  target = 5;
console.log(combinationSum2(candidates, target));
