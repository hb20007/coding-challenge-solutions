const assert = require('assert');
const partOne = require('./partOne');
const partTwo = require('./partTwo');

describe('Day 5: A Maze of Twisty Trampolines, All Alike', () => {
  const OFFSETS = [0, 3, 0, 1, -3];

  describe('Part 1', () => {
    it('should calculate 5 steps needed', () => {
      assert.equal(5, partOne(OFFSETS));
    });
  });

  describe('Part 2', () => {
    it('should calculate 10 steps needed', () => {
      assert.equal(10, partTwo(OFFSETS));
    });
  });
});
