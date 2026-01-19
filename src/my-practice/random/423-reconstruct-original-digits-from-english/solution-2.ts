function originalDigits(s: string): string {
  const cnt = new Array(26).fill(0);
  for (const c of s) cnt[c.charCodeAt(0) - 97]++;

  const res = new Array(10).fill(0);

  // Unique letters
  res[0] = cnt['z'.charCodeAt(0) - 97];
  res[2] = cnt['w'.charCodeAt(0) - 97];
  res[4] = cnt['u'.charCodeAt(0) - 97];
  res[6] = cnt['x'.charCodeAt(0) - 97];
  res[8] = cnt['g'.charCodeAt(0) - 97];

  // Dependent letters
  res[3] = cnt['h'.charCodeAt(0) - 97] - res[8];
  res[5] = cnt['f'.charCodeAt(0) - 97] - res[4];
  res[7] = cnt['s'.charCodeAt(0) - 97] - res[6];
  res[1] = cnt['o'.charCodeAt(0) - 97] - res[0] - res[2] - res[4];
  res[9] = cnt['i'.charCodeAt(0) - 97] - res[5] - res[6] - res[8];

  let ans = '';
  for (let i = 0; i <= 9; i++) {
    ans += String(i).repeat(res[i]);
  }
  return ans;
}
