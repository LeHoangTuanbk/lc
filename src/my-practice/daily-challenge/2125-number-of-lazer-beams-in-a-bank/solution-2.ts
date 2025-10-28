export function numberOfBeams(bank: string[]): number {
  const activeRows: number[] = [];

  for (const row of bank) {
    let count = 0;
    for (let i = 0; i < row.length; i++) {
      if (row[i] === '1') count++;
    }
    if (count > 0) activeRows.push(count);
  }

  let result = 0;
  for (let i = 0; i < activeRows.length - 1; i++) {
    result += activeRows[i] * activeRows[i + 1];
  }

  return result;
}
