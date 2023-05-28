# Solution to Part 2 with Regular Expressions
import re


def meets_criteria2(pwd: int) -> bool:
	pwd_as_str = str(pwd)

	# We need to find a group of strictly 2 repeating digits. In the 2nd RE,
	# we use negative lookahead and negative lookbehind to make sure that
	# the digits matched are indeed strictly 2 in number.
	# The negative lookbehind with a fixed-length group reference (?<!\1..)
	# was added in Python 3.5.
	return bool(
		re.fullmatch(r'1*2*3*4*5*6*7*8*9*', pwd_as_str)
		and re.search(r'(.)\1(?<!\1..)(?!\1)', pwd_as_str)
	)


def count_possible_pwds2(start: int, end: int) -> int:
	return sum(meets_criteria2(num) for num in range(start, end + 1))
