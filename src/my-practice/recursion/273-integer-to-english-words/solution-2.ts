function numberToWords(num: number): string {
  if (num === 0) return 'Zero';

  const tens = [
    '',
    'Ten',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety',
  ];
  const ones = [
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

  function helper(num: number): string {
    if (num >= 1000000000)
      return helper(Math.floor(num / 1000000000)) + ' Billion ' + helper(num % 1000000000);
    if (num >= 1000000)
      return helper(Math.floor(num / 1000000)) + ' Million ' + helper(num % 1000000);
    if (num >= 1000) return helper(Math.floor(num / 1000)) + ' Thousand ' + helper(num % 1000);
    if (num >= 100) return helper(Math.floor(num / 100)) + ' Hundred ' + helper(num % 100);
    if (num >= 20) return tens[Math.floor(num / 10)] + ' ' + helper(num % 10);
    return ones[num];
  }

  return helper(num).trim().replace(/ +/g, ' ');
}
