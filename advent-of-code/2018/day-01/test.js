const assert = require('assert');
const partOne = require('./partOne');
const partTwo = require('./partTwo');

describe('Part 1', () => {
  it('should return 3 when input is +1, -2, +3, +1', () => {
    const input = `+1
-2
+3
+1`;
    assert.strictEqual(partOne(input), 3);
  });
});

describe('Part 2', () => {
  it('should return 2 when input is +1, -2, +3, +1', () => {
    const input = `+1
-2
+3
+1`;
    assert.strictEqual(partTwo(input), 2);
  });

  it('should return 0 when input is +1, -1', () => {
    const input = `+1
-1`;
    assert.strictEqual(partTwo(input), 0);
  });

  it('should return 14 when input is +7, +7, -2, -7, -4', () => {
    const input = `+7
+7
-2
-7
-4`;
    assert.strictEqual(partTwo(input), 14);
  });
});
