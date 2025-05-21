export function findLucky(arr: number[]): number {
  const freq: number[] = Array(501).fill(0);
  for (const num of arr) {
    freq[num]++;
  }
  let largestLuckyNumber = -1;
  for (let i = 1; i < 501; i++) {
    if (freq[i] && freq[i] === i) {
      largestLuckyNumber = i;
    }
  }
  return largestLuckyNumber;
}
