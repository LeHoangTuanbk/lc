export function smallestSufficientTeam(req_skills: string[], people: string[][]): number[] {
  const n = req_skills.length,
    m = people.length;
  const skillId: Record<string, number> = {};
  for (let i = 0; i < n; i++) {
    skillId[req_skills[i]] = i;
  }

  const pMask = Array(m).fill(0);
  for (let i = 0; i < m; i++) {
    for (const s of people[i]) {
      pMask[i] |= 1 << skillId[s];
    }
  }

  const dp = Array(1 << n).fill(Infinity);
  const trace: number[][] = Array.from({ length: 1 << n }, () => []);
  dp[0] = 0;

  for (let mask = 0; mask < 1 << n; ++mask) {
    for (let i = 0; i < m; i++) {
      const mask2 = mask | pMask[i];
      if (dp[mask2] > dp[mask] + 1) {
        dp[mask2] = dp[mask] + 1;
        trace[mask2] = [mask, i];
      }
    }
  }

  const res = [];
  for (let mask = (1 << n) - 1; mask > 0; ) {
    const [preMask, i] = trace[mask];
    res.push(i);
    mask = preMask;
  }
  return res;
}

/* 
- Chọn tất subsets không được. 


*/
