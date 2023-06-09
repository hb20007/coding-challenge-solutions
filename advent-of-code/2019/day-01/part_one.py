def calc_fuel(masses: list[int]) -> int:
    return sum(mass // 3 - 2 for mass in masses)
