// The bottom right corner of each spiral is the sequence of odd squares.
const partOne = (num) => {
  if (num === 1) return 0;

  // Find the largest odd square smaller than the input:
  let oddSqBase;
  for (oddSqBase = 1; (oddSqBase + 2) * (oddSqBase + 2) < num; oddSqBase += 2);

  const oddSquare = oddSqBase * oddSqBase;

  // Go through the next spiral till we find the number:
  const firstSteps = oddSqBase;
  const restSteps = firstSteps + 1;

  const bottomRight = oddSquare + 1;
  const topRight = bottomRight + oddSqBase;
  const topLeft = topRight + oddSqBase + 1;
  const bottomLeft = topLeft + oddSqBase + 1;

  const firstDistanceToCenter = (oddSqBase - 3) / 2 + 1;
  const restDistanceToCenter = firstDistanceToCenter + 1;

  function getSteps(baseCorner, steps, distanceToCenter) {
    const offset =
      // I got this formula by thinking graphically about the function I want.
      // The interplay between the negative sign and the absolute value creates the logic:
      -Math.abs(num - baseCorner - distanceToCenter) + distanceToCenter;
    return steps - offset;
  }

  if (num >= topRight) {
    let baseCorner = topRight;

    if (num >= bottomLeft) {
      baseCorner = bottomLeft;
    } else if (num >= topLeft) {
      baseCorner = topLeft;
    }

    return getSteps(baseCorner, restSteps, restDistanceToCenter);
  }

  // First quarter of spiral
  return getSteps(bottomRight, firstSteps, firstDistanceToCenter);
};

module.exports = partOne;
