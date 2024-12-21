const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) || Object.prototype.toString.call(date) !== '[object Date]' || isNaN(date.getTime())) {
    throw new TypeError('Invalid date!');
  }

  const fakeDateMethods = [
    'getMonth', 'getFullYear', 'getDate', 'getHours', 'getMinutes', 'getSeconds', 'getMilliseconds', 'getDay'
  ];

  for (const method of fakeDateMethods) {
    if (typeof date[method] !== 'function') {
      throw new TypeError('Invalid date!');
    }
  }

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const validDate = new Date(year, month, day);
  if (validDate.getDate() !== day) {
    throw new TypeError('Invalid date!');
  }

  return (month < 2 || month === 11) ? 'winter' :
    (month < 5) ? 'spring' :
      (month < 8) ? 'summer' :
        'autumn';
}

module.exports = {
  getSeason
};
