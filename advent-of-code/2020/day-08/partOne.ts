import { Instructions } from './consts.ts';
import { parseInstructionsAsObjects } from './utils.ts';

const checkAccValueWhenProgramLoops = (
  instructions: Array<string>,
): number => {
  const instructionObjects = parseInstructionsAsObjects(instructions);

  const runProgramRecursively = (
    currentIndex = 0,
    visitedIndices = new Set(),
  ): number => {
    if (visitedIndices.has(currentIndex)) return 0;

    const { name, value } = instructionObjects[currentIndex];

    if (name === Instructions.ACC) {
      return value +
        runProgramRecursively(
          currentIndex + 1,
          new Set([...visitedIndices, currentIndex]),
        );
    }
    if (name === Instructions.JMP) {
      return runProgramRecursively(currentIndex + value, visitedIndices);
    }
    return runProgramRecursively(currentIndex + 1, visitedIndices);
  };

  return runProgramRecursively();
};

export { checkAccValueWhenProgramLoops };
