require('chai').should();
const partOne = require('./partOne');
const partTwo = require('./partTwo');

describe('Part 1', () => {
  it('should return 4 overlapping inches', () => {
    const input = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`;
    partOne(input).should.equal(4);
  });
});

describe('Part 2', () => {
  it('should return claim ID 3 (no overlap)', () => {
    const input = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`;
    partTwo(input).should.equal(3);
  });
});
