import { Instructions } from './consts.ts';

export interface Instruction {
  name:
    | typeof Instructions.ACC
    | typeof Instructions.JMP
    | typeof Instructions.NOP;
  value: number;
}
