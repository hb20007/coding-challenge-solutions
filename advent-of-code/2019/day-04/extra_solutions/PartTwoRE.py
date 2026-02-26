# Solution to Part 2 with Regular Expressions
import re


def meets_criteria_2(pwd: int) -> bool:
	pwd_as_str = str(pwd)

	# We need to find a group of strictly two repeating digits. In the second RE,
	# we use negative lookahead and negative lookbehind to ensure that
	# exactly two digits are matched.
	# The negative lookbehind with a fixed-length group reference (?<!\1..)
	# was added in Python 3.5.
	return bool(
		re.fullmatch(r'1*2*3*4*5*6*7*8*9*', pwd_as_str)
		and re.search(r'(.)\1(?<!\1..)(?!\1)', pwd_as_str)
	)


def count_possible_pwds_2(start: int, end: int) -> int:
	return sum(meets_criteria_2(num) for num in range(start, end + 1))
