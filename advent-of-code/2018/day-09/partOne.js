const partOne = (input) => {
  const [players, marbles] = input.split(/\D+/).map(Number);

  const scores = new Uint32Array(players);
  const circle = new Uint32Array(marbles);

  let circleLength = 1;
  let current = 0;
  for (let value = 1; value <= marbles; value++) {
    if (value % 23) {
      current = ((current + 1) % circleLength) + 1;
      circle.copyWithin(current + 1, current, circleLength);
      circle[current] = value;
      circleLength++;
    } else {
      const player = value % players;
      let score = value;
      current = current > 6 ? current - 7 : current + circleLength - 7;
      score += circle[current];
      circle.copyWithin(current, current + 1, circleLength);
      scores[player] += score;
      circleLength--;
    }
  }

  return Math.max(...scores);
};

module.exports = partOne;
