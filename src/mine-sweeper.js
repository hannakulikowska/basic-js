// const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length; // number of arrays in the matrix
  const cols = matrix[0].length; // length of the first array in the matrix is equal to `columns`

  const newMatrix = [];

  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      let count = 0;

      // Check other cells around each cell:
      // <== to the left or battom of the current cell `-1`
      // current cell `0`
      // ==> to the right or top of the current cell `1`
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          // Don't check current cell
          if (x === 0 && y === 0) {
            continue;
          }

          const newX = r + x;
          const newY = c + y;

          // Check if the cell is in matrix
          if (newX >= 0 && newX < rows && newY >= 0 && newY < cols) {
            // Count mines around
            if (matrix[newX][newY]) {
              count++;
            }
          }
        }
      }

      // Set number of mines around current cell
      row.push(count);
    }

    // Create rows in new matrix
    newMatrix.push(row);
  }

  // Return new matrix
  return newMatrix;
}

module.exports = {
  minesweeper
};
