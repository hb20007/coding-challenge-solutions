const countTreesInPath = (
  map: Array<string>,
  pathRightSlope: number,
  pathDownSlope: number,
): number => {
  const width = map[0].length;

  const traverser = (row = 0, col = 0): number =>
    row < map.length
      ? traverser(row + pathDownSlope, (col + pathRightSlope) % width) +
        (map[row][col] === '#' ? 1 : 0) // NOSONAR
      : 0;

  return traverser();
};

export { countTreesInPath };
