require('chai').should();
const partOne = require('./partOne');
const partTwo = require('./partTwo');

const TESTS = {
  part1: {
    test1: {
      input: 'aA',
      result: 0,
    },
    test2: {
      input: 'abBA',
      result: 0,
    },
    test3: {
      input: 'abAB',
      result: 4,
    },
    test4: {
      input: 'aabAAB',
      result: 6,
    },
    test5: {
      input: 'dabAcCaCBAcCcaDA',
      result: 10,
    },
  },
  part2: {
    test1: {
      input: 'dabAcCaCBAcCcaDA',
      result: 4,
    },
  },
};

describe('Part 1', () => {
  it(`should return ${TESTS.part1.test1.result} when input is ${TESTS.part1.test1.input}`, () => {
    partOne(TESTS.part1.test1.input).should.equal(TESTS.part1.test1.result);
  });
  it(`should return ${TESTS.part1.test2.result} when input is ${TESTS.part1.test2.input}`, () => {
    partOne(TESTS.part1.test2.input).should.equal(TESTS.part1.test2.result);
  });
  it(`should return ${TESTS.part1.test3.result} when input is ${TESTS.part1.test3.input}`, () => {
    partOne(TESTS.part1.test3.input).should.equal(TESTS.part1.test3.result);
  });
  it(`should return ${TESTS.part1.test4.result} when input is ${TESTS.part1.test4.input}`, () => {
    partOne(TESTS.part1.test4.input).should.equal(TESTS.part1.test4.result);
  });
  it(`should return ${TESTS.part1.test5.result} when input is ${TESTS.part1.test5.input}`, () => {
    partOne(TESTS.part1.test5.input).should.equal(TESTS.part1.test5.result);
  });
});

describe('Part 2', () => {
  it(`should return ${TESTS.part2.test1.result} when input is ${TESTS.part2.test1.input}`, () => {
    partTwo(TESTS.part2.test1.input).should.equal(TESTS.part2.test1.result);
  });
});
