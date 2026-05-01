const Instructions = {
  ACC: 'acc',
  JMP: 'jmp',
  NOP: 'nop',
};

const INSTRUCTION_REGEX = /(acc|jmp|nop) ([+-]\d+)/

export { Instructions, INSTRUCTION_REGEX }
