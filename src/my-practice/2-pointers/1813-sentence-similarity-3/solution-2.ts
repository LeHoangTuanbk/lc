export function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
  let s1 = sentence1.split(' ');
  let s2 = sentence2.split(' ');

  if (s1.length < s2.length) [s1, s2] = [s2, s1]; // s1 is longer

  let left = 0;
  while (left < s2.length && s1[left] === s2[left]) {
    left++;
  }

  let right = 0;
  while (right < s2.length - left && s1[s1.length - 1 - right] === s2[s2.length - 1 - right]) {
    right++;
  }

  return left + right >= s2.length;
}
