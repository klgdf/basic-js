const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 */
function deleteDigit(n) {
  n = n.toString().split('').map(x => +x);
  let minValue = Math.min(...n);
  for (i = 0; i < n.length; i++) {
    if (n[i] < n[i + 1]) {
      n[i] = "";
      break;
    } else if ((n[i] == n[i + 1] && n[i] == minValue) || i == n.length - 1){
      n[i] = "";
      break;
    }
  }
  return +n.join("");
}

module.exports = {
  deleteDigit
};
