import { strictEqual } from 'node:assert';
import partOne from './partOne.js';
import partTwo from './partTwo.js';

describe('Day 1: Inverse Captcha', () => {
  describe('Part 1', () => {
    it('should evaluate captcha 1122', () => {
      strictEqual(3, partOne([1, 1, 2, 2]));
    });

    it('should evaluate captcha 1111', () => {
      strictEqual(4, partOne([1, 1, 1, 1]));
    });

    it('should evaluate captcha 1234', () => {
      strictEqual(0, partOne([1, 2, 3, 4]));
    });

    it('should evaluate captcha 91212129', () => {
      strictEqual(9, partOne([9, 1, 2, 1, 2, 1, 2, 9]));
    });
  });

  describe('Part 2', () => {
    it('should evaluate captcha 1212', () => {
      strictEqual(6, partTwo([1, 2, 1, 2]));
    });

    it('should evaluate captcha 1221', () => {
      strictEqual(0, partTwo([1, 2, 2, 1]));
    });

    it('should evaluate captcha 123425', () => {
      strictEqual(4, partTwo([1, 2, 3, 4, 2, 5]));
    });

    it('should evaluate captcha 123123', () => {
      strictEqual(12, partTwo([1, 2, 3, 1, 2, 3]));
    });

    it('should evaluate captcha 12131415', () => {
      strictEqual(4, partTwo([1, 2, 1, 3, 1, 4, 1, 5]));
    });
  });
});
