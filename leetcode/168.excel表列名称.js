/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  // 'A'.charCodeAt() === 65
  // String.fromCharCodeAt()
  let r = [];
  while (n > 26) {
    r.unshift(n % 26);
    n = (n / 26) | 0;
  }
  r.unshift(n);
  r = r.map(item => item + 64);
  return String.fromCharCode(...r);
};
