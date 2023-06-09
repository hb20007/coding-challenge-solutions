const partTwo = (input) => { // NOSONAR
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

  const sleepMinutes = {};

  let currentGuardId = -1;
  let minuteFallsAsleep = -1;
  let minuteWakesUp = -1;
  for (const shift of input) {
    const minute = parseInt(shift[4]);
    const action = shift[5].toLowerCase();

    if (action === 'guard') {
      currentGuardId = shift[6]; // eslint-disable-line prefer-destructuring

      if (!sleepMinutes[currentGuardId]) {
        sleepMinutes[currentGuardId] = {};

        for (let key = 0; key < 60; key++) { // NOSONAR
          sleepMinutes[currentGuardId][key] = 0;
        }
      }
    } else if (action === 'falls') {
      minuteFallsAsleep = minute;
    } else {
      minuteWakesUp = minute;

      for (let m = minuteFallsAsleep; m < minuteWakesUp; m++) {
        sleepMinutes[currentGuardId][m] += 1;
      }
    }
  }

  let laziestGuardId = -1;
  let sleepiestMinute = -1;
  let maxSleepCount = -1;

  Object.keys(sleepMinutes).forEach((guardId) => {
    Object.entries(sleepMinutes[guardId]).forEach(
      ([minute, currentSleepCount]) => {
        if (currentSleepCount > maxSleepCount) {
          maxSleepCount = currentSleepCount;
          sleepiestMinute = minute;
          laziestGuardId = guardId;
        }
      }
    );
  });

  return +laziestGuardId * sleepiestMinute;
};

module.exports = partTwo;
