# Solution to Part 1 with Numpy
from typing import List
import numpy as np


def calc_fuel(masses: List[int]) -> int:
	return np.sum(np.floor(np.array(masses) / 3) - 2)
