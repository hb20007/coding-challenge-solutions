// Implemented this way because
// "the device might need to repeat its list of frequency changes many times
// before a duplicate frequency is found".
const partTwo = (input) => {
  input = input.split('\n').map(Number);

  let currentFreq = 0;
  let i = 0;
  const visited = { 0: true };

  // eslint-disable-next-line no-constant-condition
  while (true) {
    currentFreq += input[i];

    if (visited[currentFreq]) break;

    visited[currentFreq] = true;
    i = (i + 1) % input.length;
  }

  return currentFreq;
};

module.exports = partTwo;
