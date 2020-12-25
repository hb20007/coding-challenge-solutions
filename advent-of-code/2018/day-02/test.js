require('chai').should();
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
    partOne(input).should.equal(12);
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
    partTwo(input).should.equal('fgij');
  });
});
