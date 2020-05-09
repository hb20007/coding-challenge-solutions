from typing import List

def calc_fuel(masses: List[int]) -> int:
    return sum(mass // 3 - 2 for mass in masses)
