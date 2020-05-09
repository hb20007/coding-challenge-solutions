from partOne import distance_to_closest_intersection
from partTwo import steps_to_best_intersection

with open('input.txt') as f:
	WIRE_1_PATH, WIRE_2_PATH = [
		wire_path.split(',')
		for wire_path in f.read().split('\n')
	]

print(f'PART 1: {distance_to_closest_intersection(WIRE_1_PATH, WIRE_2_PATH)}')
print(f'PART 2: {steps_to_best_intersection(WIRE_1_PATH, WIRE_2_PATH)}')
