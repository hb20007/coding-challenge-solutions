from typing import List


def is_increasing(pwd: List[str]):
	return pwd == sorted(pwd)


def has_double(pwd: List[str]):
	end = len(pwd) - 1

	for i in range(end):
		if pwd[i] == pwd[i + 1] and \
			(i == 0 or pwd[i] != pwd[i - 1]) and \
			(i == end - 1 or pwd[i] != pwd[i + 2]):
			return True
	return False


def meets_criteria2(pwd: int) -> bool:
	pwd_as_list = list(str(pwd))
	return is_increasing(pwd_as_list) and has_double(pwd_as_list)


def count_possible_pwds2(start: int, end: int) -> int:
	return sum(meets_criteria2(num) for num in range(start, end + 1))
