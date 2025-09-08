require('chai').should();
const partOne = require('./partOne');
const partTwo = require('./partTwo');

const TESTS = {
  part1: {
    test1: {
      input: '+1, -2, +3, +1',
      result: 3,
    },
  },
  part2: {
    test1: {
      input: '+1, -2, +3, +1',
      result: 2,
    },
    test2: {
      input: '+1, -1',
      result: 0,
    },
    test3: {
      input: '+7, +7, -2, -7, -4',
      result: 14,
    },
  },
};

describe('Part 1', () => {
  it(`should return ${TESTS.part1.test1.result} when input is ${TESTS.part1.test1.input}`, () => {
    const input = `+1
-2
+3
+1`;
    partOne(input).should.equal(TESTS.part1.test1.result);
  });
});

describe('Part 2', () => {
  it(`should return ${TESTS.part2.test1.result} when input is ${TESTS.part2.test1.input}`, () => {
    const input = `+1
-2
+3
+1`;
    partTwo(input).should.equal(TESTS.part2.test1.result);
  });

  it(`should return ${TESTS.part2.test2.result} when input is ${TESTS.part2.test2.input}`, () => {
    const input = `+1
-1`;
    partTwo(input).should.equal(TESTS.part2.test2.result);
  });

  it(`should return ${TESTS.part2.test3.result} when input is ${TESTS.part2.test3.input}`, () => {
    const input = `+7
+7
-2
-7
-4`;
    partTwo(input).should.equal(TESTS.part2.test3.result);
  });
});
