export function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
  // s1, s2 different length, add to the shorter one.
  // The longer one should contain the shorter one.
  // check contain => true, if not => false
  let s1 = sentence1.split(' ');
  let s2 = sentence2.split(' ');
  if (s1.length < s2.length) {
    [s1, s2] = [s2, s1];
  }

  let i = 0,
    j = 0;
  const n = s1.length,
    m = s2.length;
  if (m == 1) return s1[0] === s2[0];

  let numberAddedSentences = 0,
    isSentenceAdded = false;
  while (i <= n - 1 && j <= m - 1) {
    while (s1[i] !== s2[j]) {
      i++;
      isSentenceAdded = true;
    }
    if (i == n - 1 && j === m - 1) return numberAddedSentences <= 1;
    if (isSentenceAdded) numberAddedSentences++;
    i++;
    j++;
    isSentenceAdded = false;
  }

  return numberAddedSentences <= 1;
}

const sentence1 = 'c h p Ny',
  sentence2 = 'c BDQ r h p Ny';
console.log(areSentencesSimilar(sentence1, sentence2));

/* 

sentence1 =
"eTUny i b R UFKQJ EZx JBJ Q xXz"
sentence2 =
"eTUny i R EZx JBJ xXz"

Use Testcase
Output
true
Expected
false
*/
