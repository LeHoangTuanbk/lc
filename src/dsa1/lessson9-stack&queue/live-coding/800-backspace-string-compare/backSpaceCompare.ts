function backspaceCompare(s: string, t: string): boolean {
  function process(s: string): string {
    const st: string[] = [];
    for (let c of s) {
      if (c == '#') {
        st.pop();
      } else {
        st.push(c);
      }
    }
    return st.join('');
  }

  let s1 = process(s);
  let s2 = process(t);

  return s1 === s2;
}

function backspaceCompare2(s: string, t: string): boolean {
  let i = s.length - 1,
    j = t.length - 1;

  while (i >= 0 || j >= 0) {
    i = getNextValidCharIndex(s, i);
    j = getNextValidCharIndex(t, j);

    if (i < 0 && j < 0) return true; // cả hai kết thúc
    if (i < 0 || j < 0) return false; // chỉ một cái hết
    if (s[i] !== t[j]) return false; // ký tự khác nhau

    i--;
    j--;
  }

  return true;
}

function getNextValidCharIndex(str: string, index: number): number {
  let backspaceCount = 0;
  while (index >= 0) {
    if (str[index] === '#') {
      backspaceCount++;
    } else if (backspaceCount > 0) {
      backspaceCount--;
    } else {
      break;
    }
    index--;
  }
  return index;
}
