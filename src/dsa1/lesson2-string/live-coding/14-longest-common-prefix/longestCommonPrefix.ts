// Time complexity: O(mn)
function longestCommonPrefixOmn(strs: string[]): string {
  let res: string[] = [];
  const oneStringLength = strs[0].length;
  const arrayStringsLength = strs.length;
  for (let i = 0; i < oneStringLength; i++) {
    const commonCharacter = strs[0][i];
    for (let j = 1; j < arrayStringsLength; j++) {
      if (commonCharacter !== strs[j][i]) {
        return res.join('');
      }
    }
    res.push(commonCharacter);
  }
  return res.join('');
}

// Time complexity: O(nlog(n))
export function longestCommonPrefix(strs: string[]): string {
  let res: string[] = [];
  const sortedStrings = strs.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  const firstString = sortedStrings[0];
  const lastString = sortedStrings[sortedStrings.length - 1];
  for (let i = 0; i < Math.min(firstString.length, lastString.length); i++) {
    if (firstString[i] != lastString[i]) {
      return res.join('');
    }
    res.push(firstString[i]);
  }
  return res.join('');
}
