const assert = require('assert');
const partOne = require('./partOne');
const partTwo = require('./partTwo');

describe('Part 1', () => {
  it('should return 4 overlapping inches', () => {
    const input = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`;
    assert.strictEqual(partOne(input), 4);
  });
});

describe('Part 2', () => {
  it('should return claim id 3 (no overlap)', () => {
    const input = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`;
    assert.strictEqual(partTwo(input), 3);
  });
});
