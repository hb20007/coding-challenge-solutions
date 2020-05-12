const partOne = (input) => (
  input
    .split('\n')
    .map(Number)
    .reduce((result, change) => result + change)
);

module.exports = partOne;
