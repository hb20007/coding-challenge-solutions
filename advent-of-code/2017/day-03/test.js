import { strictEqual } from 'node:assert';
import partOne from './partOne.js';
import partTwo from './partTwo.js';

describe('Day 3: Spiral Memory', () => {
  describe('Part 1', () => {
    it('should calculate steps for square 1', () => {
      strictEqual(0, partOne(1));
    });

    it('should calculate steps for square 12', () => {
      strictEqual(3, partOne(12));
    });

    it('should calculate steps for square 23', () => {
      strictEqual(2, partOne(23));
    });

    it('should calculate steps for square 1024', () => {
      strictEqual(31, partOne(1024));
    });
  });

  describe('Part 2', () => {
    it('should calculate the first value in the sequence larger than 10', () => {
      strictEqual(11, partTwo(10));
    });

    it('should calculate the first value in the sequence larger than 59', () => {
      strictEqual(122, partTwo(59));
    });
  });
});
