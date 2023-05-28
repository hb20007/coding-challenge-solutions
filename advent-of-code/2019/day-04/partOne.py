def meets_criteria(pwd: int) -> bool:
	pwd_as_str = str(pwd)
	pwd_as_list = list(pwd_as_str)
	return (
		pwd_as_list == sorted(pwd_as_list)
		and len(pwd_as_str) != len(set(pwd_as_str))
	)


def count_possible_pwds(start: int, end: int) -> int:
	return sum(meets_criteria(num) for num in range(start, end + 1))
