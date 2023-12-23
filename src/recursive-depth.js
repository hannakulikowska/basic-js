const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(arr) {
    // check if the passed parameter is an array
    if (!Array.isArray(arr)) {
      return 0;
    }

    // counter
    let maxDepth = 0;

    for (const subArr of arr) {
      const currentDepth = this.calculateDepth(subArr);
      maxDepth = Math.max(currentDepth, maxDepth);
    }

    return 1 + maxDepth;
  }
}

module.exports = {
  DepthCalculator
};