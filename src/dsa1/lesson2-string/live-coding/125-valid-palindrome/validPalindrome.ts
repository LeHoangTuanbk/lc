export function isPalindrome(s: string): boolean {
  const allValidLetter = s
    .split('')
    .map((c) => c.toLocaleLowerCase())
    .filter((c) => {
      const isValidCharacter =
        (c.charAt(0) >= 'a'.charAt(0) && c.charAt(0) <= 'z'.charAt(0)) ||
        (c.charAt(0) >= '0'.charAt(0) && c.charAt(0) <= '9'.charAt(0));
      if (isValidCharacter) {
        return true;
      }
      return false;
    });
  let i = 0,
    j = allValidLetter.length - 1;
  while (i <= j) {
    if (allValidLetter[i] != allValidLetter[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
