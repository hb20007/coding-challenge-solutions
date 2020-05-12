const partTwo = (offsets) => {
  let currentI = 0;
  let steps = 0;

  while (0 <= currentI && currentI < offsets.length) {
    const currentOffset = offsets[currentI];

    offsets[currentI] > 2 ? offsets[currentI]-- : offsets[currentI]++;
    currentI += currentOffset;

    steps++;
  }

  return steps;
};

module.exports = partTwo;
