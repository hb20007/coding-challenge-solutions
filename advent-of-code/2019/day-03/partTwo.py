from typing import List, Set, Tuple, Dict
from partOne import get_all_wire_path_positions

def get_steps_for_crossings(
	wire_path: List[str],
	crossings: Set[Tuple[int, int]]
) -> Dict[Tuple[int, int], int]:
	crossing_dict = {}
	distance = 0
	x, y = 0, 0

	for i in range(len(wire_path)):
		for _ in range(int(wire_path[i][1:])):
			direction = wire_path[i][0]

			if   direction == "R":
				x +=1
			elif direction == "L":
				x -=1
			elif direction == "D":
				y +=1
			elif direction == "U":
				y -=1
			else:
				sys.exit('Something weird happened.')

			distance += 1

			if (x, y) in crossings:
				crossing_dict[(x, y)] = distance

	return crossing_dict

def steps_to_best_intersection(
	wire_1_path: List[str],
	wire_2_path: List[str]
) -> int:
	wire_1_positions = get_all_wire_path_positions(wire_1_path)
	wire_2_positions = get_all_wire_path_positions(wire_2_path)

	crossings = wire_1_positions.intersection(wire_2_positions)

	crossing_dict_1 = get_steps_for_crossings(wire_1_path, crossings)
	crossing_dict_2 = get_steps_for_crossings(wire_2_path, crossings)

	return min(
		crossing_dict_1[crossing] + crossing_dict_2[crossing]
		for crossing in crossings
	)
