import unittest
from partOne import distance_to_closest_intersection
from partTwo import steps_to_best_intersection

class TestDay3(unittest.TestCase):
	def test_part1(self):
		tests = [
			(
				['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'],
				['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'],
				159
			),
			(
				['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'],
				['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'],
				135
			)
		]

		for test in tests:
			with self.subTest(test=test):
				self.assertEqual(
					distance_to_closest_intersection(test[0], test[1]),
					test[2]
				)

	def test_part2(self):
		tests = [
			(
				['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'],
				['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'],
				610
			),
			(
				['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'],
				['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'],
				410
			)
		]

		for test in tests:
			with self.subTest(test=test):
				self.assertEqual(
					steps_to_best_intersection(test[0], test[1]),
					test[2]
				)

if __name__ == '__main__':
    unittest.main()
