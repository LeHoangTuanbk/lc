export function numberToWords(num: number): string {
  if (num === 0) return 'Zero';

  const below20 = [
    '',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen',
  ];
  const tens = [
    '',
    '',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety',
  ];
  const thousands = ['', 'Thousand', 'Million', 'Billion'];

  let result = '';
  let i = 0;

  function helper(num: number): string {
    if (num === 0) return '';
    if (num < 20) return below20[num] + ' ';
    if (num < 100) {
      return tens[Math.floor(num / 10)] + ' ' + helper(num % 10);
    }
    return below20[Math.floor(num / 100)] + ' Hundred ' + helper(num % 100);
  }

  while (num > 0) {
    if (num % 1000 !== 0) {
      result = helper(num % 1000) + thousands[i] + ' ' + result;
    }
    num = Math.floor(num / 1000);
    i++;
  }

  return result.trim();
}

const num = 50868;
console.log(numberToWords(num));
