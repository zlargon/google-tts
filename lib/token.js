function XL (a, b) {
  for (var c = 0; c < b.length - 2; c += 3) {
    var d = b.charAt(c + 2);
    d = d >= 'a' ? d.charCodeAt(0) - 87 : Number(d);
    d = b.charAt(c + 1) == '+' ? a >>> d : a << d;
    a = b.charAt(c) == '+' ? a + d & 4294967295 : a ^ d;
  }
  return a;
}

/**
 * Generate API Token
 *
 * @param   {String} text
 * @param   {String} key
 * @return  {String} token
 */
module.exports = function (text, key) {
  var a = text, b = key, d = b.split('.');
  b = Number(d[0]) || 0;
  for (var e = [], f = 0, g = 0; g < a.length; g++) {
    var m = a.charCodeAt(g);
    128 > m ? e[f++] = m : (2048 > m ? e[f++] = m >> 6 | 192 : (55296 == (m & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (m = 65536 + ((m & 1023) << 10) + (a.charCodeAt(++g) & 1023),
    e[f++] = m >> 18 | 240,
    e[f++] = m >> 12 & 63 | 128) : e[f++] = m >> 12 | 224,
    e[f++] = m >> 6 & 63 | 128),
    e[f++] = m & 63 | 128);
  }
  a = b;
  for (f = 0; f < e.length; f++) {
    a += e[f];
    a = XL(a, '+-a^+6');
  }
  a = XL(a, '+-3^+b+-f');
  a ^= Number(d[1]) || 0;
  0 > a && (a = (a & 2147483647) + 2147483648);
  a = a % 1E6;
  return a.toString() + '.' + (a ^ b);
};
