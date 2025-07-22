## 1.Fixed length

```Typescript
function fixedSizeSlidingWindow(nums: number[], k: number): number {
  let sum = 0;
  let maxSum = -Infinity;

  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];
    if (end >= k - 1) {
      maxSum = Math.max(maxSum, sum);
      sum -= nums[end - k + 1]; // bỏ phần tử bên trái
    }
  }

  return maxSum;
}

```

## 2. Variable size window

```Typescript
function variableWindow(nums: number[], target: number): number {
  let left = 0, currentSum = 0, minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    while (currentSum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      currentSum -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
```

## 3. Hashmap

```Typescript
function slidingWindowChar(s: string, k: number): number {
  const count: Record<string, number> = {};
  let left = 0, maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    count[c] = (count[c] ?? 0) + 1;

    while (/* window condition violated */) {
      count[s[left]]--;
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

```
