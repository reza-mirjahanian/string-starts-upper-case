const {
  isFirstLetterUpperCase
} = require('./stringUtil')

const test1 = 'Reza';
const test2 = 'rEza';
const test3 = '1rEza';

console.log(test1 + ' is upper case: ' + isFirstLetterUpperCase(test1));
console.log(test2 + ' is upper case: ' + isFirstLetterUpperCase(test2));
console.log(test3 + ' is upper case: ' + isFirstLetterUpperCase(test3));
