export function finalPrices(prices: number[]): number[] {
  const n = prices.length;
  const nses = Array(n).fill(n);
  const st: number[] = [];
  let res: number[] = Array(n);
  for (let i = n - 1; i >= 0; i--) {
    while (st.length && prices[st.at(-1)] > prices[i]) {
      st.pop();
    }

    nses[i] = st.length === 0 ? n : st.at(-1);
    if (nses[i] < n) res[i] = prices[i] - prices[nses[i]];
    else res[i] = prices[i];
    st.push(i);
  }

  return res;
}

const prices = [5, 2, 6, 9, 7];
console.log(finalPrices(prices));
