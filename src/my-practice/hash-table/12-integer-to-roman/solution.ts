function intToRoman(num: number): string {
  const map = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  } as const;

  const arr = Object.keys(map).map(Number);

  let res = '';
  const numsString = num.toString();
  const n = numsString.length;
  for (let i = 0; i < n; i++) {
    let temp = Number.parseInt(numsString[i]) * Math.pow(10, n - 1 - i);
    if (map[temp]) {
      res += map[temp];
    } else {
      // subtract until temp -> zero
      while (temp > 0) {
        const closestNumber = arr[binarySearch(arr, temp)];
        const matchRoman = map[closestNumber];
        res = res + matchRoman;
        temp -= closestNumber;
      }
    }
  }
  return res;
}

function binarySearch(arr: number[], target: number) {
  let lo = 0,
    hi = arr.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return lo - 1;
}

const n = 3749;
console.log(intToRoman(n));
