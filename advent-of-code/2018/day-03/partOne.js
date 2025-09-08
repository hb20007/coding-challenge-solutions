const partOne = (input) => {
  input = input
    .split('\n')
    .map((n) => n.split(/\s+/))
    .map((arr) => {
      const pos = arr[2].replace(':', '').split(',').map(Number);
      const dimensions = arr[3].split('x').map(Number);
      return pos.concat(dimensions);
    });

  const coordMap = {};

  input.forEach((arr) => {
    for (let i = arr[0]; i < arr[0] + arr[2]; i++) {
      for (let j = arr[1]; j < arr[1] + arr[3]; j++) {
        const coord = `${i},${j}`;
        coordMap[coord] = coordMap[coord] ? coordMap[coord] + 1 : 1;
      }
    }
  });

  return Object.values(coordMap).filter((val) => val > 1).length;
};

module.exports = partOne;
