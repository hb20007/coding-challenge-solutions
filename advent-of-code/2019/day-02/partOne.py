import sys
from typing import List, Optional


def parse_intcodes(
	intcodes: List[int],
	pos1: Optional[int] = None,
	val1: Optional[int] = None,
	pos2: Optional[int] = None,
	val2: Optional[int] = None
) -> Optional[int]:
	ints = intcodes[:]

	if pos1 is not None and val1 is not None:
		ints[pos1] = val1
	if pos2 is not None and val2 is not None:
		ints[pos2] = val2

	for i in range(0, len(intcodes), 4):
		if ints[i] == 1:
			ints[ints[i + 3]] = ints[ints[i + 1]] + ints[ints[i + 2]]
		elif ints[i] == 2:
			ints[ints[i + 3]] = ints[ints[i + 1]] * ints[ints[i + 2]]
		elif ints[i] == 99:
			return ints[0]
		else:
			sys.exit('Something weird happened.')
