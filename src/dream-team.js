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
  // throw new NotImplementedError('Not implemented');
  if (!Array.isArray(members)) {
    return false;
  }
  console.log(' members= ', members);
  const result = members.flatMap((item) => {
    if (typeof item === 'string' && item.trim().length != 0) {
      item = item.trim();
      let letter = item.toString().slice(0, 1).toUpperCase();
      console.log('letter = ', letter);
      return letter;
    } else { return []; }
  }).sort().join('');
  return (result.length == 0) ? false : result;
}
module.exports = {
  createDreamTeam
};
