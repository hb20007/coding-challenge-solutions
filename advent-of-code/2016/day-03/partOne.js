const fs = require('fs');

const vertices = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split('\n');

function isTriangle(data) {
  const side1 = Number(data.substr(0, 5));
  const side2 = Number(data.substr(5, 5));
  const side3 = Number(data.substr(10, 5));

  return (
    side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2
  );
}

const validTriangles = vertices.reduce(
  (trianglesCount, current) => trianglesCount + +isTriangle(current),
  0
);

console.log(validTriangles);
