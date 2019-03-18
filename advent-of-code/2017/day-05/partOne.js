const partOne = offsets => {
  let currentI = 0,
    steps = 0;

  while (0 <= currentI && currentI < offsets.length) {
    offsets[currentI]++;

    currentI += offsets[currentI] - 1;

    steps++;
  }

  return steps;
};

module.exports = partOne;
