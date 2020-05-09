def calc_fuel_single(mass: int) -> int:
	fuel_needed = mass // 3 - 2
	return fuel_needed + calc_fuel_single(fuel_needed) if fuel_needed >= 9 else fuel_needed

def calc_fuel_recursive(masses) -> int:
    return sum(calc_fuel_single(mass) for mass in masses)
