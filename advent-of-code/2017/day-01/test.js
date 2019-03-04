const assert = require('assert');
const partOne = require('./partOne');
// const partTwo = require('./partTwo');

describe('Part 1', () => {
  it('should properly calculate 1122', () => {
    assert.equal(3, partOne('1122'));
  });

  it('should properly calculate 1111', () => {
    assert.equal(4, partOne('1111'));
  });

  it('should properly calculate 1234', () => {
    assert.equal(0, partOne('1234'));
  });

  it('should properly calculate 91212129', () => {
    assert.equal(9, partOne('91212129'));
  });

});

// describe('Part 2', () => {
  // it('should properly calculate 1212', () => {
  //   assert.equal(6, partTwo('1212'));
  // });

  // it('should properly calculate 1221', () => {
  //   assert.equal(0, partTwo('1221'));
  // });

  // it('should properly calculate 123425', () => {
  //   assert.equal(4, partTwo('123425'));
  // });

  // it('should properly calculate 123123', () => {
  //   assert.equal(12, partTwo('123123'));
  // });

  // it('should properly calculate 12131415', () => {
  //   assert.equal(4, partTwo('12131415'));
  // });
// });
