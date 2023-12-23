// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * --discard-next excludes the next element of the array from the transformed array.
 * --discard-prev excludes the previous element of the array from the transformed array.
 * --double-next duplicates the next element of the array in the transformed array.
 * --double-prev duplicates the previous element of the array in the transformed array.
 * 
 * The function must not affect inital array. Control sequences are applied from left to right to initial array elements. 
 * Control sequences do not fall into the transformed array. Control sequences in initial array don't occur in a row. 
 * If there is no element next to the control sequence to which it can be applied in the initial array, or this element was previously deleted, it does nothing. 
 * The function should throw an `Error` with message `'arr' parameter must be an instance of the Array!` if the arr is not an Array.
 * 
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
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const newArr = [];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === '--double-next') {
      if (i < arr.length - 1) {
        newArr.push(arr[i + 1]);
      }
    }
    else if (arr[i] === '--double-prev') {
      if (i > 0 && arr[i - 2] !== '--discard-next') {
        newArr.push(arr[i - 1]);
      }
    }
    else if (arr[i] === '--discard-next') {
      i++;
    }
    else if (arr[i] === '--discard-prev') {
      if (i > 0 && arr[i - 2] !== '--discard-next') {
        newArr.pop();
      }
    }
    else {
      newArr.push(arr[i]); // if not a command, just push to stack
    }

  }

  return newArr;
}




module.exports = {
  transform
};
