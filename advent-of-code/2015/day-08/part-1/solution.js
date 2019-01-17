const fs = require('fs');
const INPUT = fs.readFileSync(__dirname + '/input.txt', 'utf-8').split('\n');

// The eval() function evaluates JavaScript code represented as a string.
// eval() is a dangerous function, which executes the code it's passed with the privileges of the caller.
// If you run eval() with a string that could be affected by a malicious party, you may end up running malicious code.

const result = INPUT.reduce(
  (acc, line) => acc + (line.length - eval(line).length),
  0
);

console.log(result);
