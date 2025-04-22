export function decodeMessage(key: string, message: string): string {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const characterMap = new Map();
  let i = 0;
  let j = 0;
  while (i < key.length && j < alphabet.length) {
    const c = key[i];
    i++;
    if (characterMap.has(c) || c === ' ') {
      continue;
    }
    characterMap.set(c, alphabet[j]);
    j++;
  }

  return message
    .split('')
    .map((c) => {
      if (c === ' ') return c;
      return characterMap.get(c);
    })
    .join('');
}
