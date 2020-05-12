/* eslint consistent-return: "off" */
const partTwo = (banks) => {
  const patterns = {};

  let snapshot = banks.join(':');

  while (!patterns[snapshot]) {
    let bank = Math.max(...banks);
    let currentIndex = banks.findIndex((x) => x === bank);

    if (!patterns[snapshot]) {
      patterns[snapshot] = {
        firstTimeSeenBefore: 0
      };
    }

    banks[currentIndex] = 0;
    currentIndex++;

    while (bank > 0) {
      if (currentIndex === banks.length) {
        currentIndex = 0;
      }

      banks[currentIndex++]++;
      bank--;
    }

    snapshot = banks.join(':');

    if (patterns[snapshot]) {
      return patterns[snapshot].firstTimeSeenBefore + 1;
    }

    Object.keys(patterns).forEach((x) => patterns[x].firstTimeSeenBefore++);
  }
};

module.exports = partTwo;
