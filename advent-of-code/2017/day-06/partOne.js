const partOne = (banks) => {
  const patterns = {};

  let snapshot = banks.join(':');
  let reallocations = 0;

  while (!patterns[snapshot]) {
    let bank = Math.max(...banks);
    let currentIndex = banks.indexOf(bank);

    banks[currentIndex] = 0;
    currentIndex++;

    while (bank > 0) {
      if (currentIndex === banks.length) {
        currentIndex = 0;
      }

      banks[currentIndex++]++;
      bank--;
    }

    patterns[snapshot] = true;

    snapshot = banks.join(':');
    reallocations++;
  }

  return reallocations;
};

export default partOne;
