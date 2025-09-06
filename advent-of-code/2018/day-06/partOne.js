const partOne = (input) => { // NOSONAR
  input = input.split('\n').map((line) => line.split(', ').map(Number));

  const xCoords = input.map(([x]) => x); // Array destructuring
  const yCoords = input.map(([, y]) => y);
  const minX = Math.min(...xCoords);
  const maxX = Math.max(...xCoords);
  const minY = Math.min(...yCoords);
  const maxY = Math.max(...yCoords);
  const diffX = maxX - minX;
  const diffY = maxY - minY;

  const infiniteAreaPoints = new Set();

  // Get the nearest point(s) of a given pair of coordinates:
  function getNearestPoints(x, y) {
    const distances = input.map(
      (point) => Math.abs(point[0] - x) + Math.abs(point[1] - y)
    );
    const minDistance = Math.min(...distances);
    return input.filter((_, i) => distances[i] === minDistance);
  }

  // Finding points with infinite areas
  // (if a point is the nearest to some safe distance from the area with all the points,
  // then that point has an infinite area):
  for (let x = minX; x <= maxX; x++) {
    let point = getNearestPoints(x, minY - diffY);
    if (point.length === 1) infiniteAreaPoints.add(point);
    point = getNearestPoints(x, maxY + diffY);
    if (point.length === 1) infiniteAreaPoints.add(point);
  }
  for (let y = minY; y <= maxY; y++) {
    let point = getNearestPoints((minX - diffX, y));
    if (point.length === 1) infiniteAreaPoints.add(point);
    point = getNearestPoints(maxX + diffX, y);
    if (point.length === 1) infiniteAreaPoints.add(point);
  }

  // Count all finite areas:
  const areas = new Array(input.length);
  for (let x = minX; x <= maxX; x++) {
    for (let y = minY; y <= maxY; y++) {
      const nearest = getNearestPoints(x, y);
      const [point] = nearest;
      if (nearest.length === 1 && !infiniteAreaPoints.has(point)) {
        const index = input.indexOf(point);
        areas[index] = (areas[index] || 0) + 1;
      }
    }
  }

  // The filter removes all falsy (false, null, undefined, 0, NaN, '') items:
  return Math.max(...areas.filter(Boolean));
};

module.exports = partOne;
