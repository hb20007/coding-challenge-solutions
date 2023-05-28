# Solution to Part 1 with Regular Expressions
import re


def meets_criteria(pwd: int) -> bool:
	pwd_as_str = str(pwd)
	return bool(
		(
			re.fullmatch(r'1*2*3*4*5*6*7*8*9*', pwd_as_str)
			and re.search(r'(.)\1', pwd_as_str)
		)
	)


def count_possible_pwds(start: int, end: int) -> int:
	return sum(meets_criteria(num) for num in range(start, end + 1))
