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
 *
 */
function deleteDigit(n) {
  const digits = String(n).split('').map(Number);
  // console.log(`digits: ${ digits }`);

  let maxResult = 0;

  for (let i = 0; i < digits.length; i++) {
    const currentDigits = [...digits]; // copy array
    currentDigits.splice(i, 1); // Delete current digit
    // console.log(`currentDigits: ${currentDigits}`);
    const currentResult = Number(currentDigits.join(''));
    // console.log(`currentResult: ${currentResult}`);
    if (currentResult > maxResult) {
      maxResult = currentResult;
    }
  }

  return maxResult;
}

deleteDigit(1254678);


module.exports = {
  deleteDigit
};
