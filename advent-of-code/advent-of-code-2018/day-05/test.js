const assert = require('assert');
const partOne = require('./partOne');
const partTwo = require('./partTwo');

describe('Part 1', () => {
  it('should return 0 when input is aA', () => {
    const input = 'aA';
    assert.strictEqual(partOne(input), 0);
  });
  it('should return 0 when input is abBA', () => {
    const input = 'abBA';
    assert.strictEqual(partOne(input), 0);
  });
  it('should return 4 when input is abAB', () => {
    const input = 'abAB';
    assert.strictEqual(partOne(input), 4);
  });
  it('should return 6 when input is aabAAB', () => {
    const input = 'aabAAB';
    assert.strictEqual(partOne(input), 6);
  });
  it('should return 10 when input is dabAcCaCBAcCcaDA', () => {
    const input = 'dabAcCaCBAcCcaDA';
    assert.strictEqual(partOne(input), 10);
  });
});

describe('Part 2', () => {
  it('should return 4 when input is dabAcCaCBAcCcaDA', () => {
    const input = 'dabAcCaCBAcCcaDA';
    assert.strictEqual(partTwo(input), 4);
  });
});
