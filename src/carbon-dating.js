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
  const k = 0.693 / HALF_LIFE_PERIOD;
  if (typeof sampleActivity === 'string') {

    // To converte to a float number
    const activity = parseFloat(sampleActivity);

    // False, if not a number or > modern activity or <=0
    if (isNaN(activity) || activity > MODERN_ACTIVITY || activity <= 0 ) {
      return false;
    }

    return Math.ceil(Math.log(MODERN_ACTIVITY / activity) / k);
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
