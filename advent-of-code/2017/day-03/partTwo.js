const request = require('sync-request');

// Sequence A141481 in oeis
const partTwo = (num) => {
  const response = request('GET', 'https://oeis.org/A141481/b141481.txt');
  const sequenceInverted = response.body
    .toString()
    .split('\n')
    .slice(2)
    .map((str) => parseInt(str.split(' ')[1]))
    .reverse();
  const nextIndex = sequenceInverted.findIndex((element) => element <= num);

  return sequenceInverted[nextIndex - 1];
};

module.exports = partTwo;
