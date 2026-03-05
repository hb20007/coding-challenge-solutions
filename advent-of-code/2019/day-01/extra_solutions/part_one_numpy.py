# Solution to Part 1 with Numpy
import numpy as np


def calc_fuel(masses: list[int]) -> int:
	return np.sum(np.floor(np.array(masses) / 3) - 2) # type: ignore
