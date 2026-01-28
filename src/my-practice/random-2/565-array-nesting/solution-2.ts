export function arrayNesting(nums: number[]): number {
  const n = nums.length;
  const visited = Array(n).fill(false);
  let ans = 0;

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    let count = 0;
    let cur = i;

    while (!visited[cur]) {
      visited[cur] = true;
      cur = nums[cur];
      count++;
    }

    ans = Math.max(ans, count);
  }

  return ans;
}
