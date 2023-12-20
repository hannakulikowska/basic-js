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

// The first solution is faster

function renameFiles(names) {
  // create a new Set (there are only unique names)
  const renamed = new Set();
  // create an object to count file names
  const countFiles = {};

   // check each element of the names array
  for (let i = 0; i < names.length; i++) {
    let newName = names[i];
    // count variable is equal zero, if newName doesn't exist in countFiles. If newName file exists in countFiles, then count is equal to the number of existing files 
    let count = countFiles[newName] || 0;

    // while renamed set has already had newName, count and update newName
    while (renamed.has(newName)) {
      newName = `${names[i]}(${++count})`;
    }

    countFiles[names[i]] = count;
    renamed.add(newName);
  }

  return Array.from(renamed);
}


// // The second solution
// function renameFiles(names) {
  
//   const renamed = [];
  
//   const countFiles = {};

 
//   for (const name of names) {
//     let newName = name;
    
//     let count = countFiles[newName] || 0;

//     while (renamed.includes(newName)) {
//       count++;
//       newName = `${name}(${count})`;
//     }

//     countFiles[name] = count;
//     renamed.push(newName);
//   }
  
//   return renamed;  
// }


module.exports = {
  renameFiles
};
