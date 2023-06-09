import sys


def manhattan_dist_2d(coord: tuple[int, int]) -> int:
	return abs(coord[0]) + abs(coord[1])


def get_all_wire_path_positions(wire_path: list[str]) -> set[tuple[int, int]]:
	x, y = 0, 0
	positions = set()

	for i in range(len(wire_path)):
		# Trick to loop as many times as the number:
		for _ in range(int(wire_path[i][1:])):
			direction = wire_path[i][0]

			if direction == "R":
				x += 1
			elif direction == "L":
				x -= 1
			elif direction == "D":
				y += 1
			elif direction == "U":
				y -= 1
			else:
				sys.exit('Something weird happened.')

			positions.add((x, y))

	return positions


def distance_to_closest_intersection(
	wire_1_path: list[str],
	wire_2_path: list[str]
) -> int:
	wire_1_positions = get_all_wire_path_positions(wire_1_path)
	wire_2_positions = get_all_wire_path_positions(wire_2_path)

	crossings = wire_1_positions.intersection(wire_2_positions)

	return min(manhattan_dist_2d(pos) for pos in crossings)
