require('chai').should();
const partOne = require('./partOne');
const partTwo = require('./partTwo');

describe('Part 1', () => {
  it('should return 138', () => {
    const input = '2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2';
    partOne(input).should.equal(138);
  });

  it('should return 66', () => {
    const input = '2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2';
    partTwo(input).should.equal(66);
  });
});
