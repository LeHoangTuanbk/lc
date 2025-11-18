function solve() {
  const fs = require('fs');
  const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
  let idx = 0;

  let t = Number(input[idx++]);
  let out = [];

  while (t--) {
    const n = Number(input[idx++]);
    const k = Number(input[idx++]);

    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push([Number(input[idx++]), i + 1]); // [value, originalIndex]
    }

    arr.sort((a, b) => a[0] - b[0]);

    let bestVal = Infinity;
    let ansI = 1,
      ansJ = 2;

    for (let i = 0; i < n - 1; i++) {
      const [v1, id1] = arr[i];
      const [v2, id2] = arr[i + 1];

      const x = v1 ^ v2;

      if (x < bestVal) {
        bestVal = x;
        ansI = id1;
        ansJ = id2;
      }
    }

    out.push(`${ansI} ${ansJ} 0`);
  }

  console.log(out.join('\n'));
}
