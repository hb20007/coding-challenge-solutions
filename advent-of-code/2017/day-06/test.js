import { strictEqual } from 'node:assert';
import partOne from './partOne.js';
import partTwo from './partTwo.js';

describe('Day 6: Memory Reallocation', () => {
  const BANKS = [0, 2, 7, 0];

  describe('Part 1', () => {
    it('should calculate five steps', () => {
      strictEqual(partOne(BANKS), 5);
    });
  });

  describe('Part Two', () => {
    it('should calculate loop size four', () => {
      strictEqual(partTwo(BANKS), 4);
    });
  });
});
