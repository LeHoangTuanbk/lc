export function combinationSum2(candidates: number[], target: number): number[][] {
  candidates = candidates.sort((a, b) => a - b);
  let res: number[][] = [];
  const n = candidates.length;
  const visited = Array(n).fill(false);
  const set = new Set<string>();
  function backtrack(selectedCandidates: number[], start: number) {
    if (selectedCandidates.reduce((s, v) => s + v, 0) === target) {
      const key = selectedCandidates.join(',');
      if (!set.has(key)) {
        res.push([...selectedCandidates]);
        set.add(key);
      }
      return;
    }
    for (let i = start; i < n; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      selectedCandidates.push(candidates[i]);
      backtrack(selectedCandidates, i + 1);
      selectedCandidates.pop();
      visited[i] = false;
    }
  }
  backtrack([], 0);
  return res;
}

const candidates = [2, 5, 2, 1, 2],
  target = 5;
console.log(combinationSum2(candidates, target));
