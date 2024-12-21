const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const strLine = String(str);
  let addition = options.addition === undefined ? '' : String(options.addition);
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  let additionLine = '';
  for (let i = 0; i < additionRepeatTimes; i++) {
    additionLine += addition;
    if (i < additionRepeatTimes - 1) {
      additionLine += additionSeparator;
    }
  }

  let resultLine = '';
  for (let i = 0; i < repeatTimes; i++) {
    resultLine += strLine + additionLine;
    if (i < repeatTimes - 1) {
      resultLine += separator;
    }
  }

  return resultLine;
}

module.exports = {
  repeater
};
