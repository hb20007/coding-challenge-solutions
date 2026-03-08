import request from 'sync-request';

// Sequence A141481 in the OEIS
const partTwo = (num) => {
  const response = request('GET', 'https://oeis.org/A141481/b141481.txt');
  const sequenceInverted = response.body
    .toString()
    .split('\n')
    .slice(2)
    .map((str) => Number.parseInt(str.split(' ')[1]))
    .reverse();
  const nextIndex = sequenceInverted.findIndex((element) => element <= num);

  return sequenceInverted[nextIndex - 1];
};

export default partTwo;
