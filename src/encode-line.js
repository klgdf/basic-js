const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newArray = [];
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while (str[i] == str[i + 1] && (i < str.length - 1)) {
      console.log(1);
      count++;
      i++;
    }
    if (count > 1) {
      newArray.push(count)
    }
    newArray.push(str[i])
  }
  return newArray.join('');
}

module.exports = {
  encodeLine
};
