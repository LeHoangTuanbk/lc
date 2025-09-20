export function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
  let s1 = sentence1.length > sentence2.length ? sentence1.split(' ') : sentence2.split(' ');
  let s2 = sentence1.length > sentence2.length ? sentence2.split(' ') : sentence1.split(' ');

  while (s2.length && s2[0] === s1[0]) {
    s2.shift();
    s1.shift();
  }

  while (s2.length && s2.at(-1) === s1.at(-1)) {
    s2.pop();
    s1.pop();
  }
  return s2.length === 0;
}
