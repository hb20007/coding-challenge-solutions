from part_one import count_possible_pwds
from part_two import count_possible_pwds_2

with open('input.txt') as f:
	range_start, range_end = [int(num) for num in f.read().split('-')]

print(f'PART 1: {count_possible_pwds(range_start, range_end)}')
print(f'PART 2: {count_possible_pwds_2(range_start, range_end)}')
