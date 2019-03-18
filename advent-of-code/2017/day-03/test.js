const assert = require('assert');
const partOne = require('./partOne');
const partTwo = require('./partTwo');

describe('Day 3: Spiral Memory', () => {
  describe('Part 1', () => {
    it('should calculate steps for square 1', () => {
      assert.equal(0, partOne(1));
    });

    it('should calculate steps for square 12', () => {
      assert.equal(3, partOne(12));
    });

    it('should calculate steps for square 23', () => {
      assert.equal(2, partOne(23));
    });

    it('should calculate steps for square 1024', () => {
      assert.equal(31, partOne(1024));
    });
  });

  describe('Part 2', () => {
    it('should calculate the first value in the sequence larger than 10', () => {
      assert.equal(11, partTwo(10));
    });

    it('should calculate the first value in the sequence larger than 59', () => {
      assert.equal(122, partTwo(59));
    });
  });
});
