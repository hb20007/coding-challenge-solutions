import { INSTRUCTION_REGEX } from './consts.ts';
import { Instruction } from './interfaces.ts';

const parseInstructionsAsObjects = (
  instructions: Array<string>,
): Instruction[] => {
  return instructions.map((instructionString) => {
    const [_, name, valueStr] =
      new RegExp(INSTRUCTION_REGEX).exec(instructionString) || [];
    const value = Number.parseInt(valueStr);
    return { name, value };
  });
};

export { parseInstructionsAsObjects };
