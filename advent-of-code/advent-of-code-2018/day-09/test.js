const assert = require('assert');
const partOne = require('./partOne');

describe('Part 1', () => {
  it('should return 32 for 9 players and last marble worth 25', () => {
    const input = '9 players; last marble is worth 25 points';
    assert.strictEqual(partOne(input), 32);
  });
  it('should return 8317 for 10 players and last marble worth 1618', () => {
    const input = '10 players; last marble is worth 1618 points';
    assert.strictEqual(partOne(input), 8317);
  });
  it('should return 146373 for 13 players and last marble worth 7999', () => {
    const input = '13 players; last marble is worth 7999 points';
    assert.strictEqual(partOne(input), 146373);
  });
  it('should return 2764 for 17 players and last marble worth 1104', () => {
    const input = '17 players; last marble is worth 1104 points';
    assert.strictEqual(partOne(input), 2764);
  });
  it('should return 54718 for 21 players and last marble worth 6111', () => {
    const input = '21 players; last marble is worth 6111 points';
    assert.strictEqual(partOne(input), 54718);
  });
  it('should return 37305 for 30 players and last marble worth 5807', () => {
    const input = '30 players; last marble is worth 5807 points';
    assert.strictEqual(partOne(input), 37305);
  });
});
