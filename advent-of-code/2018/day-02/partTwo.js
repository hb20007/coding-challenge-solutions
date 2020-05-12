/* eslint consistent-return: "off" */
const partTwo = (input) => {
  input = input.split('\n');

  const noOfIds = input.length;
  const idLength = input[0].length;

  for (let i = 0; i < noOfIds; i++) {
    for (let j = i + 1; j < noOfIds; j++) {
      const identicalLetters = [];
      for (let k = 0; k < idLength; k++) {
        if (input[i][k] === input[j][k]) {
          identicalLetters.push(input[i][k]);
        }
      }

      if (identicalLetters.length === idLength - 1) {
        return identicalLetters.join('');
      }
    }
  }
};

module.exports = partTwo;
