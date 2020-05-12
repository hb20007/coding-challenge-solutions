const partOne = (input) => {
  input = input
    .split('\n')
    .map((event) => event.trim())
    .sort()
    .map((event) => (
      event
        .match(
          /\[(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})\] (\w+) #?(\d+\d+|\w+)/
        )
        .slice(1)
    ));

  const sleepMinutes = {}; // Object counting how many times each guard was asleep for each minute

  let currentGuardId = -1;
  let minuteFallsAsleep = -1;
  let minuteWakesUp = -1;
  for (const shift of input) {
    const minute = parseInt(shift[4]);
    const action = shift[5].toLowerCase();

    // Shift begins
    if (action === 'guard') {
      currentGuardId = shift[6]; // eslint-disable-line prefer-destructuring

      // If guard's first shift ever
      if (!sleepMinutes[currentGuardId]) {
        sleepMinutes[currentGuardId] = {};

        for (let key = 0; key < 60; key++) {
          sleepMinutes[currentGuardId][key] = 0;
        }
      }
    } else if (action === 'falls') {
      minuteFallsAsleep = minute;
    } else {
      // action === 'wakes'
      minuteWakesUp = minute;

      for (let m = minuteFallsAsleep; m < minuteWakesUp; m++) {
        sleepMinutes[currentGuardId][m] += 1;
      }
    }
  }

  const mostMinutesSlept = Object.keys(sleepMinutes)
    .map((guardId) => Object.values(sleepMinutes[guardId]).reduce(
      (previousSleepCount, currentSleepCount) => (
        previousSleepCount + currentSleepCount
      ), 0
    ))
    .reduce((maxSleepTotal, currentSleepTotal) => (
      currentSleepTotal > maxSleepTotal ? currentSleepTotal : maxSleepTotal
    ));

  const laziestGuardId = Object.keys(sleepMinutes).find(
    (guardId) => Object.values(sleepMinutes[guardId]).reduce(
      (previousSleepCount, currentSleepCount) => (
        previousSleepCount + currentSleepCount
      ), 0
    ) === mostMinutesSlept
  );

  let sleepiestMinute = -1;
  let maxSleepCount = -1;
  for (const key in sleepMinutes[laziestGuardId]) {
    if (Object.prototype.hasOwnProperty.call(sleepMinutes[laziestGuardId], key)) {
      const currentSleepCount = sleepMinutes[laziestGuardId][key];
      if (currentSleepCount > maxSleepCount) {
        maxSleepCount = currentSleepCount;
        sleepiestMinute = key;
      }
    }
  }

  return +laziestGuardId * sleepiestMinute;
};

module.exports = partOne;
