require('chai').should();
const partOne = require('./partOne');

describe('Part 1', () => {
  it('should return CABDFE', () => {
    const input = `Step C must be finished before step A can begin.
Step C must be finished before step F can begin.
Step A must be finished before step B can begin.
Step A must be finished before step D can begin.
Step B must be finished before step E can begin.
Step D must be finished before step E can begin.
Step F must be finished before step E can begin.`;

    partOne(input).should.equal('CABDFE');
  });
});
