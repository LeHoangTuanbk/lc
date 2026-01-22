function isAllDigits(s: string): boolean {
  for (const c of s) {
    if (c < '0' || c > '9') return false;
  }
  return true;
}

function validateIPv4(strs: string[]): boolean {
  for (const s of strs) {
    if (s.length === 0) return false;
    if (s.length > 1 && s[0] === '0') return false;
    if (!isAllDigits(s)) return false;
    const num = Number(s);
    if (num > 255 || num < 0) return false;
  }
  return true;
}

function validateIPv6(strs: string[]): boolean {
  for (const s of strs) {
    if (s.length === 0) return false;
    if (s.length > 4) return false;
    for (const c of s) {
      if (!((c >= 'A' && c <= 'F') || (c >= 'a' && c <= 'f') || (c >= '0' && c <= '9')))
        return false;
    }
  }
  return true;
}

export function validIPAddress(queryIP: string): string {
  if (queryIP.includes('.')) {
    let array = queryIP.split('.');
    const n = array.length;
    if (n !== 4) return 'Neither';
    if (validateIPv4(array)) return 'IPv4';
  } else {
    let array = queryIP.split(':');
    const n = array.length;
    if (n !== 8) return 'Neither';
    if (validateIPv6(array)) return 'IPv6';
  }
  return 'Neither';
}

const queryIP = '2001:0db8:85a3:00000:0:8A2E:0370:7334';
console.log(validIPAddress(queryIP));
