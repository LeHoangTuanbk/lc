export function countOfAtoms(formula: string): string {
  let i = 0;
  const n = formula.length;

  const isLower = (c: string) => c >= 'a' && c <= 'z';
  const isUpper = (c: string) => c >= 'A' && c <= 'Z';
  const isDigit = (c: string) => c >= '0' && c <= '9';

  const readNumber = (): number => {
    if (i >= n || !isDigit(formula[i])) return 1;
    let val = 0;
    while (i < n && isDigit(formula[i])) {
      val = val * 10 + (formula.charCodeAt(i) - 48);
      i++;
    }
    return val;
  };

  const readAtom = (): string => {
    let name = formula[i++];
    while (i < n && isLower(formula[i])) {
      name += formula[i++];
    }

    return name;
  };

  const merge = (dst: Map<string, number>, src: Map<string, number>, mul: number = 1) => {
    for (const [atom, cnt] of src) {
      dst.set(atom, (dst.get(atom) ?? 0) + cnt * mul);
    }
  };

  const parse = (): Map<string, number> => {
    const scope = new Map<string, number>();
    while (i < n && formula[i] !== ')') {
      if (formula[i] === '(') {
        i++;
        const inner = parse();
        i++;
        const mul = readNumber();
        merge(scope, inner, mul);
      } else if (isUpper(formula[i])) {
        const atom = readAtom();
        const mul = readNumber();
        scope.set(atom, (scope.get(atom) ?? 0) + mul);
      }
    }
    return scope;
  };

  const counts = parse();
  const atoms = Array.from(counts.keys()).sort();
  let res = '';
  for (const atom of atoms) {
    res += atom;
    const cnt = counts.get(atom);
    if (cnt > 1) res += cnt.toString();
  }

  return res;
}

const formula = 'Mg(OH)2';
console.log(countOfAtoms(formula));
