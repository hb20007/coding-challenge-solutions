def calc_fuel_loop(masses: list[int]) -> int:
	fuel_needed = 0
	for mass in masses:
		while (mass := mass // 3 - 2) > 0:
			fuel_needed += mass
	return fuel_needed
