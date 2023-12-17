const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const split = domains.map(domain =>
    domain.split('.').reverse());

  const dots = split.map(subarray => 
    subarray.map(word => `.${word}`))
  
  const resultArray = dots.map(subarray => {
    return subarray.reduce((acc, current) => {
      if (acc.length > 0) {
        acc.push(`${acc[acc.length - 1]}${current}`);
      } else {
        acc.push(current);
      }
      return acc;
    }, []);
  });

  const flat = resultArray.flat();

  const count = flat.reduce((acc, current) => {
    acc[current] = (acc[current] || 0) + 1;
    return acc;
  }, {});

  return count;
}



module.exports = {
  getDNSStats
};
