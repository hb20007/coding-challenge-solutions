def meets_criteria(pwd: int) -> bool:
	pwd = str(pwd)
	pwd_as_list = list(pwd)
	return pwd_as_list == sorted(pwd_as_list) and not len(pwd) == len(set(pwd))


def count_possible_pwds(start: int, end: int) -> int:
	return sum(meets_criteria(num) for num in range(start, end + 1))
