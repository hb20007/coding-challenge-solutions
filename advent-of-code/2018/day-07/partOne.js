const partOne = input => {
  input = input.split('\n').map(line => [line[5], line[36]]);
  const allSteps = [...new Set(input.flat())].sort();
  
  function getRequirements(step) {
    return input.filter(([ , s]) => s === step).map(([s]) => s);
  }

  function canBeTaken(step, takenSteps) {
    const reqs = getRequirements(step);
    return reqs.every(req => takenSteps.includes(req));
  }

  let takenSteps = '';
  let availableSteps = allSteps.filter(step => getRequirements(step).length === 0);

  while (availableSteps.length) {
    const step = availableSteps[0];
    const possibleNextSteps = input.filter(([r, e]) => r === step && canBeTaken(e, takenSteps + step)).map(s => s[1]); // possibleNextSteps can be empty.
    const helperSet = new Set(availableSteps);
    helperSet.delete(step);
    possibleNextSteps.forEach(s => helperSet.add(s));
    availableSteps = [...helperSet].sort();
    takenSteps += step;
  }

  return takenSteps;
};

module.exports = partOne;
