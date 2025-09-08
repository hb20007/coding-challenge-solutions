const fs = require('fs');

const lines = fs.readFileSync(`${__dirname}/input.txt`).toString().split('\n');

function getSides(line) {
  return [
    Number(line.substr(0, 5)),
    Number(line.substr(5, 5)),
    Number(line.substr(10, 5)),
  ];
}

const triangles = [];

for (let i = 0; i < lines.length; i += 3) {
  // We read 3 triangles at a time:
  const sides1 = getSides(lines[i]);
  const sides2 = getSides(lines[i + 1]);
  const sides3 = getSides(lines[i + 2]);

  triangles.push([sides1[0], sides2[0], sides3[0]]);
  triangles.push([sides1[1], sides2[1], sides3[1]]);
  triangles.push([sides1[2], sides2[2], sides3[2]]);
}

function isTriangle(triangle) {
  return (
    triangle[0] + triangle[1] > triangle[2] &&
    triangle[1] + triangle[2] > triangle[0] &&
    triangle[0] + triangle[2] > triangle[1]
  );
}

const validTriangles = triangles.reduce(
  (trianglesCount, current) => trianglesCount + Number(isTriangle(current)),
  0
);

console.log(validTriangles);
