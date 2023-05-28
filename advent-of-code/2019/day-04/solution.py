from partOne import count_possible_pwds
from partTwo import count_possible_pwds2

with open('input.txt') as f:
	range_start, range_end = [int(num) for num in f.read().split('-')]

print(f'PART 1: {count_possible_pwds(range_start, range_end)}')
print(f'PART 2: {count_possible_pwds2(range_start, range_end)}')
