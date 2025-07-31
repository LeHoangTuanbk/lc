export function longestPalindrome(s: string): string {
  if (s.length <= 1) return s;

  let start = 0,
    end = 0;

  for (let center = 0; center < s.length; center++) {
    const len1 = expandAroundCenter(s, center, center); // odd-length
    const len2 = expandAroundCenter(s, center, center + 1); // even-length
    const len = Math.max(len1, len2);

    if (len > end - start + 1) {
      start = center - Math.floor((len - 1) / 2);
      end = center + Math.floor(len / 2);
    }
  }

  return s.slice(start, end + 1);
}

function expandAroundCenter(s: string, left: number, right: number): number {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}
