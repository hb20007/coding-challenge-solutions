from partOne import calc_fuel
from partTwo import calc_fuel_loop

with open('input.txt') as f:
	MASSES = [int(line) for line in f.readlines()]

print(f'PART 1: {calc_fuel(MASSES)}')
print(f'PART 2: {calc_fuel_loop(MASSES)}')
