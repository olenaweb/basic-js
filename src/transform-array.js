const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
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
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  const newArr = arr.flatMap((item, i, arr) => {
    if (arr[i - 1] === '--double-next' && arr[i + 1] === '--double-prev') return [item, item, item];
    if (arr[i - 1] === '--double-next' && arr[i + 1] === '--discard-prev') return [item];
    if (arr[i - 1] === '--discard-next' && arr[i + 1] === '--double-prev') return [];
    if (arr[i - 1] === '--discard-next' && arr[i + 1] === '--discard-prev') return [];
    if (arr[i + 1] === '--discard-prev') return [];
    if (arr[i + 1] === '--double-prev') return [item, item];
    if (arr[i - 1] === '--discard-next') return [];
    if (arr[i - 1] === '--double-next') return [item, item];

    // if (item.toString().slice(0, 3) == ('--d')) return [];
    if (item == '--discard-prev' ||
      item == '--double-prev' ||
      item == '--discard-next' ||
      item == '--double-next') return [];
    return item;
  });
  return newArr;
}

module.exports = {
  transform
};
