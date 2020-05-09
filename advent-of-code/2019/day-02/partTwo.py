from typing import List
from partOne import parse_intcodes

def find_noun_and_verb(
	intcodes: List[int],
	target: int,
	noun_pos: int,
	verb_pos: int
) -> int:
	for noun in range(100):
		for verb in range(100):
			if parse_intcodes(intcodes, noun_pos, noun, verb_pos, verb) == target:
				return 100 * noun + verb
