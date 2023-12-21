const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */



function sortByHeight(arr) {
  // if there is `-1` in the arr array
  if (arr.includes(-1)) {
    const stack = [];
    const indexes = [];

    // loop to find and create new array without `-1`
    for (i = 0; i < arr.length; i++) {
      if (arr[i] !== -1) {
        stack.push(arr[i]);
      }
    }

    // sort the stack
    const sorted = stack.sort((a, b) => a - b);

    // loop to find indexes of `-1`
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === -1) {
        indexes.push(i);
      }
    }

    // insert `-1` in its original places before
    for (i = 0; i < indexes.length; i++) {
      sorted.splice(indexes[i], 0, -1);
    }

    return sorted;
  } 

  // if there is not `-1` in the arr array
  return arr.sort((a, b) => a - b);

}

module.exports = {
  sortByHeight
};
