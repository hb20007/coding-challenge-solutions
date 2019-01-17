const partTwo = input => {
  input = input.split('\n').map(line => [line[5], line[36]]);
  const allSteps = [...new Set(input.flat())].sort();

  function getRequirements(step) {
    return input.filter(([, s]) => s === step).map(([s]) => s);
  }

  function canBeTaken(step, takenSteps) {
    const reqs = getRequirements(step);
    return reqs.every(req => takenSteps.includes(req));
  }

  const NO_OF_WORKERS = 5;
  let jobs = new Array(NO_OF_WORKERS).fill(null); // null represents an idle worker.
  let takenSteps = '';
  let availableSteps = allSteps.filter(
    step => getRequirements(step).length === 0
  );
  let time = 0;

  while (takenSteps.length < allSteps.length) {
    // Take note of finished worker jobs:
    const finished = new Set();
    jobs = jobs.map(job => {
      if (job && job.end === time) {
        finished.add(job.step);
        return null;
      }
      return job;
    });
    takenSteps += [...finished].join('');

    // Compute availableSteps:
    const helperSet = new Set(availableSteps);
    finished.forEach(step => {
      const next = input
        .filter(([r, e]) => r === step && canBeTaken(e, takenSteps + step))
        .map(s => s[1]);
      next.forEach(step => helperSet.add(step));
    });
    availableSteps = [...helperSet].sort();

    // Take jobs based on availableSteps:
    jobs = jobs.map(job => {
      if (!job) {
        const step = availableSteps.shift();
        return step
          ? {
              step,
              end: time + step.charCodeAt(0) - 4
            }
          : null;
      }
      return job;
    });

    // Advance time to the end of the next job:
    const newTime = jobs.reduce(
      (min, job) => (job ? Math.min(min, job.end) : min),
      Infinity
    );
    if (newTime < Infinity) {
      time = newTime;
    }
  }

  return time;
};

module.exports = partTwo;
