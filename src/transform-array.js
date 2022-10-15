const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }

  let clone = [...arr];

  for (let i = 0; i < clone.length; i++) {
    if (clone[i] === '--discard-next') {
      clone[i] = 'ds'
      clone[i + 1] = 'ds'
    }

    if (clone[i] === '--discard-prev') {
      clone[i] = 'ds'
      clone[i - 1] = 'ds'
    }

    if (clone[i] === '--double-next') {
      clone[i] = clone[i + 1]
    }

    if (clone[i] === '--double-prev') {
      clone[i] = clone[i - 1]
    }
  }

  let result = clone.filter(el => el !== 'ds')

  return result.filter(el => el!= undefined)
}

module.exports = {
  transform
};
