function maxDistance(arrays: number[][]): number {
  let globalMin = arrays[0][0];
  let globalMax = arrays[0].at(-1);
  let ans = 0;
  for (let i = 1; i < arrays.length; i++) {
    const arr = arrays[i];
    const curMin = arr[0],
      curMax = arr.at(-1);
    ans = Math.max(ans, curMax - globalMin, globalMax - curMin);
    globalMin = Math.min(globalMin, curMin);
    globalMax = Math.max(globalMax, curMax);
  }

  return ans;
}
