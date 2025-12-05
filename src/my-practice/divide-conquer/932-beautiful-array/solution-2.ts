export function beautifulArray(n: number): number[] {
  let result = [1];

  while (result.length < n) {
    const temp: number[] = [];

    for (const x of result) {
      if (2 * x - 1 <= n) {
        temp.push(2 * x - 1);
      }
    }

    for (const x of result) {
      if (2 * x <= n) {
        temp.push(2 * x);
      }
    }

    result = temp;
  }

  return result;
}
