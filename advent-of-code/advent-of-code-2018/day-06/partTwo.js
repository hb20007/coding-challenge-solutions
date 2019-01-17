const partTwo = (input, limit) => {
  input = input.split('\n').map(line => line.split(', ').map(Number));

  const xCoords = input.map(([x]) => x);
  const yCoords = input.map(([, y]) => y);
  const minX = Math.min(...xCoords);
  const maxX = Math.max(...xCoords);
  const minY = Math.min(...yCoords);
  const maxY = Math.max(...yCoords);

  function getTotalDistance(x, y) {
    return input.reduce(
      (sum, point) => sum + Math.abs(point[0] - x) + Math.abs(point[1] - y),
      0
    );
  }

  let count = 0;
  for (let x = minX; x <= maxX; x++) {
    for (let y = minY; y <= maxY; y++) {
      if (getTotalDistance(x, y) < limit) count++;
    }
  }
  return count;
};

module.exports = partTwo;
