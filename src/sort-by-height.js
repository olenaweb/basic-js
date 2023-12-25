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
  let second = arr.filter((item) => item > -1).sort((a, b) => a - b);
  let k = 0;
  let newArr = [];
  arr.forEach((item, i) => {
    if (item == -1) {
      item = -1;
    } else {
      item = second[k];
      k++;
    }
    newArr.push(item);
  });
  return newArr;
}

module.exports = {
  sortByHeight
};
