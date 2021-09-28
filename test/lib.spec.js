'use strict';
const chai = require('chai');
chai.should();
const lib = require('../src/lib');

describe('Lib', () => {
  describe('isFirstLetterUpperCase()', () => {

    it('should throw an error for wrong input.', () => {
      // pass number
      try {
        lib.isFirstLetterUpperCase(2);
        false.should.be.equal(true);
      } catch (e) {
        e.message.should.be.equal('Input is not valid!')
      }

      // pass no arg
      try {
        lib.isFirstLetterUpperCase();
        false.should.be.equal(true);
      } catch (e) {
        e.message.should.be.equal('Input is not valid!')
      }

      // pass null
      try {
        lib.isFirstLetterUpperCase(null);
        false.should.be.equal(true);
      } catch (e) {
        e.message.should.be.equal('Input is not valid!')
      }

    });

    it('should return False for lowercase start.', () => {
      const test1 = lib.isFirstLetterUpperCase('rEZA');
      test1.should.be.equal(false);

      const test2 = lib.isFirstLetterUpperCase('a ZA');
      test2.should.be.equal(false)

      const test3 = lib.isFirstLetterUpperCase('zEZA ');
      test3.should.be.equal(false)

      const test4 = lib.isFirstLetterUpperCase('  ZEZA ');
      test4.should.be.equal(false)

      const test5 = lib.isFirstLetterUpperCase('1REZA');
      test5.should.be.equal(false)

    });


    it('should return True for uppercase start.', () => {
      const test1 = lib.isFirstLetterUpperCase('REZA');
      test1.should.be.equal(true);

      const test2 = lib.isFirstLetterUpperCase('A za');
      test2.should.be.equal(true)

      const test3 = lib.isFirstLetterUpperCase('Zre gf ');
      test3.should.be.equal(true)

      const test4 = lib.isFirstLetterUpperCase('ZEZA 121 f');
      test4.should.be.equal(true)


    });
  });

})