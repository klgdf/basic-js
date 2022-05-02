const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date || !(date instanceof Date) || (Object.getOwnPropertyNames(date).length > 0)) {
    if (!date) {
      return 'Unable to determine the time of year!'
    } else {
      throw Error('Invalid date!')
    }
  } else {
    const seasons = ['winter', 'spring', 'summer', 'autumn'];
    let indexSeason = Math.floor((date.getMonth(0) + 1) / 3 % 4);
    return seasons[indexSeason];
  }
}

module.exports = {
  getSeason
};
