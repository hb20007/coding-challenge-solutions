import { strictEqual } from 'node:assert';
import partOne from './partOne.js';
import partTwo from './partTwo.js';

describe('Day 4: High-Entropy Passphrases', () => {
  describe('Part 1', () => {
    it('should count two valid passphrases', () => {
      const PASSPHRASES = [
        ['aa', 'bb', 'cc', 'dd', 'ee'],
        ['aa', 'bb', 'cc', 'dd', 'aa'],
        ['aa', 'bb', 'cc', 'dd', 'aaa']
      ];

      strictEqual(2, partOne(PASSPHRASES));
    });
  });

  describe('Part 2', () => {
    it('should count three valid passphrases', () => {
      const PASSPHRASES = [
        ['abcde', 'fghij'],
        ['abcde', 'xyz', 'ecdab'],
        ['a', 'ab', 'abc', 'abd', 'abf', 'abj'],
        ['iiii', 'oiii', 'ooii', 'oooi', 'oooo'],
        ['oiii', 'ioii', 'iioi', 'iiio']
      ];

      strictEqual(3, partTwo(PASSPHRASES));
    });
  });
});
