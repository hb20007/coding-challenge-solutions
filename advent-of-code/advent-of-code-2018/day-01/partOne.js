const partOne = input => {
  return input
    .split('\n')
    .map(Number)
    .reduce((result, change) => result += change);
};

module.exports = partOne;
