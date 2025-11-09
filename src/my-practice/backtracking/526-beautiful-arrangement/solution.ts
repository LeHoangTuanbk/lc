export function countArrangement(n: number): number {
  const arr = Array.from({ length: n + 1 }, (_, i) => i);
  let res = 0;
  const visited = Array(n + 1).fill(false);
  function backtrack(nums: number[], start: number) {
    if (nums.length === n) {
      res++;
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (visited[i]) continue;
      const num = arr[i];
      if (num % start === 0 || start % num === 0) {
        visited[i] = true;
        nums.push(arr[i]);
        backtrack(nums, start + 1);
        visited[i] = false;
        nums.pop();
      }
    }
  }
  backtrack([], 1);
  return res;
}

console.log(countArrangement(3));
