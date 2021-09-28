'use strict';

/**
 *  if a string starts with an upper-case letter A-Z
 * @param {string} str
 * @return {boolean}
 */
const isFirstLetterUpperCase = (str) => {
  try {
    if (str && (typeof str === 'string' || str instanceof String)) {
      // Maybe , return word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90
      return /[A-Z]/.test(str.charAt(0))
    } else {
      throw Error('Input is not valid!');
    }
  } catch (e) {
    console.log(e.message);
    throw e;
  }
}

module.exports = {
  isFirstLetterUpperCase
};