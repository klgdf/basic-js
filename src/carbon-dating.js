const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
<<<<<<< HEAD

  if (!Number(sampleActivity) || typeof sampleActivity !== 'string' || sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0 ) {
    return false;
  }

  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD / 0.693);
=======
  if (typeof sampleActivity !== 'string' ||
    sampleActivity.length <= 0 ||
    Number(sampleActivity) <= 0 ||
    isNaN(Number(sampleActivity))
  )
    return false

  let carbon = 0.693 / HALF_LIFE_PERIOD
  let caluclated = Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / carbon

  if (caluclated < 0) return false

  return Math.ceil(caluclated)
>>>>>>> baa5e3beb10d3503891eb9d1269b00d66176878b
}

module.exports = {
  dateSample
};
