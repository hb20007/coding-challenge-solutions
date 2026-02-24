const partTwo = (input) => {
  input = input
    .split('\n')
    .map((n) => n.split(/\s+/))
    .map((arr) => {
      const pos = arr[2].replace(':', '').split(',').map(Number);
      const dimensions = arr[3].split('x').map(Number);
      return pos.concat(dimensions);
    });

  // Same as part 1:

  const coordMap = {};

  input.forEach((arr) => {
    for (let i = arr[0]; i < arr[0] + arr[2]; i++) {
      for (let j = arr[1]; j < arr[1] + arr[3]; j++) {
        const coord = `${i},${j}`;
        coordMap[coord] = coordMap[coord] ? coordMap[coord] + 1 : 1;
      }
    }
  });

  // We loop through all claims and find the one where
  // none of its coords have a frequency > 1 in the coord map:

  let correctClaimID = -1;

  input.forEach((arr, claimIndex) => {
    for (let i = arr[0]; i < arr[0] + arr[2]; i++) {
      for (let j = arr[1]; j < arr[1] + arr[3]; j++) {
        const coord = `${i},${j}`;
        if (coordMap[coord] > 1) {
          return;
        }
      }
    }
    // We will reach this code only for the claim that does not overlap with any other.
    correctClaimID = claimIndex + 1; // The IDs are one-based.
  });

  return correctClaimID;
};

module.exports = partTwo;
