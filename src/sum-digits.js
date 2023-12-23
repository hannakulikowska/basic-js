const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
// test: n = 91

function getSumOfDigits(n) {
  let sum = n; // 91

  while (sum >= 10) {
    let digitsSum = 0;

    // get digits of number and sum them
    while (sum > 0) {
      digitsSum += sum % 10;        // 1 // 10 //  0 // 0 //
      sum = Math.floor(sum / 10);   // 9 //  0 // 10 // 1 //
    }

    sum = digitsSum; // 10 // 1 //
  }

  return sum; // 1
}

module.exports = {
  getSumOfDigits
};
