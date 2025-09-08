const assert = require('assert');
const partOne = require('./partOne');
const partTwo = require('./partTwo');

describe('Day 4: High-Entropy Passphrases', () => {
  describe('Part 1', () => {
    it('should count 2 valid passphrases', () => {
      const PASSPHRASES = [
        ['aa', 'bb', 'cc', 'dd', 'ee'],
        ['aa', 'bb', 'cc', 'dd', 'aa'],
        ['aa', 'bb', 'cc', 'dd', 'aaa'],
      ];

      assert.strictEqual(2, partOne(PASSPHRASES));
    });
  });

  describe('Part 2', () => {
    it('should count 3 valid passphrases', () => {
      const PASSPHRASES = [
        ['abcde', 'fghij'],
        ['abcde', 'xyz', 'ecdab'],
        ['a', 'ab', 'abc', 'abd', 'abf', 'abj'],
        ['iiii', 'oiii', 'ooii', 'oooi', 'oooo'],
        ['oiii', 'ioii', 'iioi', 'iiio'],
      ];

      assert.strictEqual(3, partTwo(PASSPHRASES));
    });
  });
});
