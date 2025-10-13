const s = '009';
const n = s.length;
let firstNoneZeroIndex = -1;
for (let i = 0; i < n; i++) {
  if (s[i] === '0') {
    firstNoneZeroIndex = i + 1;
  } else {
    break;
  }
}

console.log(firstNoneZeroIndex);
console.log(s.slice(firstNoneZeroIndex));
