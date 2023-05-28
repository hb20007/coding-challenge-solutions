const assert = require('assert');
const partOne = require('./partOne');
const partTwo = require('./partTwo');

describe('Day 2: Corruption Checksum', () => {
  describe('Part 1', () => {
    it('should calculate checksum as 18', () => {
      const SPREADSHEET = [[5, 1, 9, 5], [7, 5, 3], [2, 4, 6, 8]];

      assert.strictEqual(18, partOne(SPREADSHEET));
    });
  });

  describe('Part 2', () => {
    it('should calculate second checksum as 9', () => {
      const SPREADSHEET = [[5, 9, 2, 8], [9, 4, 7, 3], [3, 8, 6, 5]];

      assert.strictEqual(9, partTwo(SPREADSHEET));
    });
  });
});
