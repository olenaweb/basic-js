const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  if (matrix == []) { return 0; }
  let maxRow = matrix.length;
  // console.log('maxRow = ', maxRow);
  // console.log('maxCol = ', maxCol);
  let count = 0;
  for (let row = 0; row < maxRow; row++) {
    let maxCol = matrix[row].length;
    for (let col = 0; col < maxCol; col++) {
      if (matrix[row][col] === '^^') { count++; };
    }
  }
  return count;
}
module.exports = {
  countCats
};
