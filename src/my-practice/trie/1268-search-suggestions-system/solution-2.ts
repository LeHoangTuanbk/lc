export function suggestedProducts(products: string[], searchWord: string): string[][] {
  products.sort();
  let res: string[][] = [];

  for (let i = 0; i < searchWord.length; i++) {
    const prefix = searchWord.substring(0, i + 1);
    let left = 0;
    let right = products.length - 1;

    while (left < right) {
      const mid = (left + right) >> 1;
      if (products[mid] >= prefix) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    const suggestions: string[] = [];
    for (let j = 0; j < 3 && left + j < products.length; j++) {
      if (products[left + j].startsWith(prefix)) {
        suggestions.push(products[left + j]);
      } else {
        break;
      }
    }
    res.push(suggestions);
  }

  return res;
}
