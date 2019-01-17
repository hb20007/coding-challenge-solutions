const fs = require('fs');
const INPUT = fs.readFileSync(__dirname + '/input.txt', 'utf-8').split('\n');
const COMMAND_REGEX = /[A-Z]+/g;
const ARGUMENTS_REGEX = /[a-z0-9]+/g;

// Parsed wires in format {wire: value} or {wire: instruction}
const WIRES = new Map();

// Dictionary of bitwise methods
const BITWISE_METHODS = {
  AND: (a, b) => a & b,
  OR: (a, b) => a | b,
  NOT: a => ~a,
  LSHIFT: (a, b) => a << b,
  RSHIFT: (a, b) => a >> b
};

// Parse instruction and return object with command, arguments and destination wire
const parseInstruction = instruction => {
  const command = instruction.match(COMMAND_REGEX); // e.g. ['OR'], can also be null
  const args = instruction.match(ARGUMENTS_REGEX); // e.g. ['eh'], or ['hg, '3']
  const destination = args.pop();

  return {
    command: command && command[0],
    args: args.map(arg => (isNaN(Number(arg)) ? arg : Number(arg))),
    destination: destination
  };
};

// Calculate value for a wire recursively
const calculateWire = wireName => {
  const wire = WIRES.get(wireName);

  if (typeof wireName === 'number') return wireName;
  if (typeof wire === 'number') return wire;
  else if (typeof wire === 'undefined') return undefined;

  if (wire.command) {
    WIRES.set(
      wireName,
      BITWISE_METHODS[wire.command](
        calculateWire(wire.args[0]),
        calculateWire(wire.args[1])
      )
    );
  } else {
    WIRES.set(wireName, calculateWire(wire.args[0]));
  }

  return WIRES.get(wireName);
};

INPUT.forEach(instruction => {
  const parsedInstruction = parseInstruction(instruction);
  WIRES.set(parsedInstruction.destination, {
    command: parsedInstruction.command,
    args: parsedInstruction.args
  });
});

// Part b:
// WIRES.set('b', 46065);

console.log(calculateWire('a'));
