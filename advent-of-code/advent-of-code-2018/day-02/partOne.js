const filterByLetterCount = (inputArray, count) => {
  return inputArray.filter(id => {
    const letters = id.split('');
    const letterMap = {};

    letters.forEach(letter => {
      letterMap[letter] = letterMap[letter] + 1 || 1;
    });

    return letters.find(letter => {
      return letterMap[letter] === count;
    });
  });
};

const partOne = input => {
  input = input.split('\n');

  return (
    filterByLetterCount(input, 2).length * filterByLetterCount(input, 3).length
  );
};

module.exports = partOne;
