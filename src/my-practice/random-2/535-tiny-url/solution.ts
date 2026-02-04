const BASE = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const PREFIX = 'http://tinyurl.com/';
let id = 0;
const map = new Map<string, string>();

function toBase62(num: number) {
  if (num === 0) return BASE[0];
  let res = '';
  while (num > 0) {
    res = BASE[num % 62] + res;
    num = Math.floor(num / 62);
  }
  return res;
}
/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
  const code = toBase62(id++);
  map.set(code, longUrl);
  return PREFIX + code;
}

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
  const code = shortUrl.replace(PREFIX, '');
  return map.get(code);
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
