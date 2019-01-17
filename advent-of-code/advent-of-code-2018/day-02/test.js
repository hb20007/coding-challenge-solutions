const assert = require('assert');
const partOne = require('./partOne');
const partTwo = require('./partTwo');

describe('Part 1', () => {
  it('should return 12 as checksum', () => {
    const input = `abcdef
bababc
abbcde
abcccd
aabcdd
abcdee
abababx`;
    assert.strictEqual(partOne(input), 12);
  });
});

describe('Part 2', () => {
  it('should find max common characters', () => {
    const input = `abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz`;
    assert.strictEqual(partTwo(input), 'fgij');
  });
});
