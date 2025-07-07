function countRangeSum(nums: number[], lower: number, upper: number): number {
  const ps: number[] = [0];
  for (const e of nums) {
    ps.push(ps.at(-1) + e);
  }
  const n = ps.length;
  return countRangeSumMergeSort(ps, 0, n - 1, lower, upper);

  function countRangeSumMergeSort(
    ps: number[],
    l: number,
    r: number,
    lower: number,
    upper: number,
  ): number {
    if (l === r) return 0;
    const m = Math.floor((l + r) / 2);
    const countLeft = countRangeSumMergeSort(ps, l, m, lower, upper);
    const countRight = countRangeSumMergeSort(ps, m + 1, r, lower, upper);
    const countCross = mergeAndCount(ps, l, m, r, lower, upper);
    return countLeft + countCross + countRight;
  }

  function mergeAndCount(
    ps: number[],
    l: number,
    m: number,
    r: number,
    lower: number,
    upper: number,
  ): number {
    let count = 0;
    let jMin = m + 1,
      jMax = jMin;

    // ps[i] + lower ≤ ps[j] ≤ ps[i] + upper
    for (let i = l; i < m + 1; i++) {
      while (jMin <= r && ps[jMin] - ps[i] < lower) jMin++;
      // jMin: chỉ số đầu tiên thoả mãn: ps[jMin] >= ps[i] + lower
      while (jMax <= r && ps[jMax] - ps[i] <= upper) jMax++;
      count += jMax - jMin;
      //jMax: chỉ số đầu tiên mà không còn thoả mã ps[jMax] <= ps[i] + upper
    }

    const merged: number[] = [];
    let i = l,
      j = m + 1;
    while (i <= m && j <= r) {
      if (ps[i] <= ps[j]) {
        merged.push(ps[i++]);
      } else {
        merged.push(ps[j++]);
      }
    }

    while (i <= m) merged.push(ps[i++]);
    while (j <= r) merged.push(ps[j++]);

    for (let k = 0; k < merged.length; k++) {
      ps[l + k] = merge[k];
    }

    return count;
  }
}
