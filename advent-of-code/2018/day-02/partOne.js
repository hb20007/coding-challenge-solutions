const partOne = (input) => {
  const filterByLetterCount = (inputArray, count) =>
    inputArray.filter((id) => {
      const letters = id.split('');
      const letterMap = {};

      letters.forEach((letter) => {
        letterMap[letter] = letterMap[letter] + 1 || 1;
      });

      return letters.find((letter) => letterMap[letter] === count);
    });

  input = input.split('\n');

  return (
    filterByLetterCount(input, 2).length * filterByLetterCount(input, 3).length
  );
};

module.exports = partOne;
