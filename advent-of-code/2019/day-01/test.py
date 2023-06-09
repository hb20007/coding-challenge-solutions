import unittest
from part_one import calc_fuel
from part_two import calc_fuel_loop


class TestDay1(unittest.TestCase):
	def test_part1(self):
		tests = [
			([12], 2),
			([14], 2),
			([1969], 654),
			([100756], 33583)
		]

		for test in tests:
			with self.subTest(test=test):
				self.assertEqual(calc_fuel(test[0]), test[1])

	def test_part2(self):
		tests = [
			([14], 2),
			([1969], 966),
			([100756], 50346)
		]

		for test in tests:
			with self.subTest(test=test):
				self.assertEqual(calc_fuel_loop(test[0]), test[1])


if __name__ == '__main__':
	unittest.main()
