import { strictEqual } from 'node:assert';
import partOne from './partOne.js';
import partTwo from './partTwo.js';

describe('Day 5: A Maze of Twisty Trampolines, All Alike', () => {
  const OFFSETS = [0, 3, 0, 1, -3];

  describe('Part 1', () => {
    it('should calculate five steps needed', () => {
      strictEqual(5, partOne(OFFSETS));
    });
  });

  describe('Part 2', () => {
    it('should calculate ten steps needed', () => {
      strictEqual(10, partTwo(OFFSETS));
    });
  });
});
