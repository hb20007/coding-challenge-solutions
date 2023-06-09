import sys


def parse_intcodes(
	intcodes: list[int],
	pos1: int | None = None,
	val1: int | None = None,
	pos2: int | None = None,
	val2: int | None = None
) -> int | None:
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
