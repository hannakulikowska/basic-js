const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */


function getCommonCharacterCount(s1, s2) {
  const result1 = [...s1].reduce((acc, n) => (acc[n] = (acc[n] ?? 0) + 1, acc), {});
  const result2 = [...s2].reduce((acc, n) => (acc[n] = (acc[n] ?? 0) + 1, acc), {});

  let totalCount = 0;

  Object.keys(result1).forEach(key => {
    if (result2.hasOwnProperty(key)) {
      const minCount = Math.min(result1[key], result2[key]);
      totalCount += minCount;
    }
  });

  return totalCount;
}


module.exports = {
  getCommonCharacterCount
};
