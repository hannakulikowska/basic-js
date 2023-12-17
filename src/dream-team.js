const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  // check if 'members' is array
  if (!Array.isArray(members)) {
    return false;
  }

  const letters = members.map(member => {
    if (typeof member === 'string') {
      const name = member.trim();
      return name[0].toUpperCase();
    }
    else {
      return '';
    }
  });
  
  const team = letters.sort().join('');
  return team;
}

module.exports = {
  createDreamTeam
};
