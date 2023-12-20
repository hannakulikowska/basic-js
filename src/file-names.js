// const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // create a new array
  const renamed = [];
  // create an object to count file names
  const countFiles = {};

  // check each element of the names array
  for (const name of names) {
    let newName = name;
    // count variable is equal zero, if newName doesn't exist in countFiles. If newName file exists in countFiles, then count is equal to the number of existing files 
    let count = countFiles[newName] || 0;

    // while the renamed array includes newName file, count to the number of files and create new name
    while (renamed.includes(newName)) {
      count++;
      newName = `${name}(${count})`;
    }

    countFiles[name] = count;
    renamed.push(newName);
  }
  // [ 'file', 'file(1)', 'image', 'file(1)(1)', 'file(2)' ]
  return renamed;  
}


module.exports = {
  renameFiles
};
