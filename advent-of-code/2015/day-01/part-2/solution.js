const fs = require('fs');
const INPUT = fs.readFileSync(__dirname + '/input.txt').toString();

let result = 0;

for (const [i, c] of INPUT.split('').entries()) {
  c === '(' ? result++ : result--;
  if (result === -1) {
    result = i + 1;
    break;
  }
}

// ALTERNATIVE SOLUTION: MORE ELEGANT BUT MUST GO THROUGH WHOLE ARRAY
// let floor = 0;
// let result = INPUT.split('').map(direction => direction === '(' ? ++floor : --floor).indexOf(-1) + 1;

console.log(result);
