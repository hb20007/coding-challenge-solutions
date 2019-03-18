const assert = require('assert');
const partOne = require('./partOne');
const partTwo = require('./partTwo');

describe('Day 6: Memory Reallocation', () => {
  const BANKS = [0, 2, 7, 0];

  describe('Part 1', () => {
    it('should calculate 5 steps', () => {
      assert.equal(partOne(BANKS), 5);
    });
  });

  describe('Part Two', () => {
    it('should calculate loop size 4', () => {
      assert.equal(partTwo(BANKS), 4);
    });
  });
});
