import { Instructions } from './consts.ts';
import { parseInstructionsAsObjects } from './utils.ts';

const checkAccValueWhenProgramTerminates = (
  instructions: Array<string>,
): number => {
  const instructionObjects = parseInstructionsAsObjects(instructions);

  const runProgramRecursively = (
    acc = 0,
    currentIndex = 0,
    visitedIndices = new Set(),
    wasMistakeConsidered = false,
  ): number => {
    const { name, value } = instructionObjects[currentIndex] || {};
    const updatedVisitedIndices = new Set([...visitedIndices, currentIndex]);

    if (currentIndex === instructionObjects.length) return acc;
    if (visitedIndices.has(currentIndex)) return Number.NEGATIVE_INFINITY;

    if (name === Instructions.ACC) {
      return runProgramRecursively(
        acc + value,
        currentIndex + 1,
        updatedVisitedIndices,
        wasMistakeConsidered,
      );
    }
    if (name === Instructions.JMP) {
      return Math.max(
        runProgramRecursively(
          acc,
          currentIndex + value,
          updatedVisitedIndices,
          wasMistakeConsidered,
        ),
        wasMistakeConsidered
          ? Number.NEGATIVE_INFINITY
          : runProgramRecursively(
            acc,
            currentIndex + 1,
            updatedVisitedIndices,
            true,
          ),
      );
    }
    return Math.max(
      runProgramRecursively(
        acc,
        currentIndex + 1,
        updatedVisitedIndices,
        wasMistakeConsidered,
      ),
      wasMistakeConsidered
        ? Number.NEGATIVE_INFINITY
        : runProgramRecursively(
          acc,
          currentIndex + value,
          updatedVisitedIndices,
          true,
        ),
    );
  };

  return runProgramRecursively();
};

export { checkAccValueWhenProgramTerminates };
